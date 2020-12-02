const BASE_URL = 'https://apagh.venice.ir/';

export default api = (url, method, body) =>
  fetch(`${BASE_URL}${url}`, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: body,
  });
