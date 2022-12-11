import client from './client';

const ENDPOINT = '/auth';

const login = (email, password) => client.post(ENDPOINT, {email, password});

export default {
  login,
};
