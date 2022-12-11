import {useState} from 'react';

const useApi = apiFunction => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...args) => {
    setLoading(true);
    setError(false);
    const response = await apiFunction(...args);
    setLoading(false);

    if (!response.ok) {
      setError(true);
      setData([]);
    } else {
      setData(response.data);
    }
  };

  return {
    data,
    error,
    loading,
    request,
  };
};

export default useApi;
