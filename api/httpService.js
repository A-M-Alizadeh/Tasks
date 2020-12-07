const BASE_URL = 'https://apagh.venice.ir/';
// const BASE_URL = 'https://api.github.com/';

export default api = (url, method, body) =>
  fetch(`${BASE_URL}${url}`, {
    method: method,
    body,
  });
