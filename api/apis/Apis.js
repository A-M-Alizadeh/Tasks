import pathHelper from '../apiPathHelper';
import api from '../httpService';

const login = (body) => {
  return api(pathHelper.login.url, pathHelper.login.method, body)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log('error in login', error);
    });
};
const posts = (body) => {
  return api(pathHelper.posts.url, pathHelper.posts.method, body)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log('error in fetching posts', error);
    });
};
const postLike = (body) => {
  return api(pathHelper.postLike.url, pathHelper.postLike.method, body)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log('error in post like', error);
    });
};

export default {login, posts, postLike};
