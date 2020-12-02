import {loginPath} from '../apiPathHelper';
import api from '../httpService';

const loginApi = (body) => api(loginPath.url, loginPath.method, body);
// const loginApi = (body) =>
//   console.log('working', api(loginPath.url, loginPath.method, body));

export {loginApi};
