import * as Types from "./types";

//--------------------------------------auth
const login = () => {
  return (dispatch) => {
    dispatch({
      type: Types.SET_LOGIN,
    });
  };
};
const logout = () => {
  return (dispatch) => {
    dispatch({
      type: Types.SET_LOGOUT,
      payload: null,
    });
  };
};
//--------------------------------------user
const createUser = (_data,navigation) => {
  console.log('create user data: ', _data);
  navigation.navigate('login');
  return (dispatch) => {
    dispatch({
      type: Types.CREATE_USER,
      payload: _data,
    });
  };
};
const setCurrentUser = (_data) => {
  return (dispatch) => {
    dispatch({
      type: Types.SET_CURRENT_USER,
      payload: _data,
    });
  };
};
const removeCurrentUser = () => {
  return (dispatch) => {
    dispatch({
      type: Types.REMOVE_CURRENT_USER,
      payload: null,
    });
  };
};

export { login, logout, setCurrentUser, removeCurrentUser, createUser };
