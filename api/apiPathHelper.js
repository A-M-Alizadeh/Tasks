const login = {
  method: 'post',
  url: 'mobile/services/action/login',
};
const posts = {
  method: 'post',
  url: '/mobile/services/information/get_dashboard/?first=0',
};
const postLike = {
  method: 'post',
  url: '/mobile/services/action/like',
};

export default {login,posts,postLike};
