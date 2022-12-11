import authToken from '../auth/storage';
import cache from '../utility/cache';

const {create} = require('apisauce');

const apiClient = create({
  baseURL: 'http://192.168.88.118:2022/api',
});

apiClient.addAsyncRequestTransform(async request => {
  const token = await authToken.getToken();
  if (!token) {
    return;
  }
  request['x-auth-token'] = token;
});

const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    cache.store(url, response.data);
    return response;
  }

  const data = await cache.get(url);
  return data ? {ok: true, data} : response;
};

export default apiClient;
