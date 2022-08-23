import apisauce from 'apisauce';

const create = (baseURL = 'https://6304394b761a3bce77e46db7.mockapi.io/api/search/getLocation') => {
  const api = apisauce.create({
    baseURL,
    headers: {
      'Cache-Control': 'no-cache',
    },
    timeout: 10000,
  });

  const setAuthToken = userAuth => api.setHeader('X-Auth-Token', userAuth);
  const setLanguage = () => api.setHeader('Accept-Language', 'id');
  const removeAuthToken = () => api.setHeader('Authorization', '');

  const getLocation = async() => await api.get('/');

  return {
    api,
    setAuthToken,
    setLanguage,
    removeAuthToken,
    getLocation,
  };
};

export default create();