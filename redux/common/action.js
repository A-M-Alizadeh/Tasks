import * as Types from "./types";

//--------------------------------------auth
const setToken = (_data) => {
  return (dispatch) => {
    dispatch({
      type: Types.SET_TOKEN,
      payload: _data,
    });
  };
};
const removeToken = () => {
  return (dispatch) => {
    dispatch({
      type: Types.REMOVE_TOKEN,
      payload: null,
    });
  };
};
//--------------------------------------user
const setUser = (_data) => {
  return (dispatch) => {
    dispatch({
      type: Types.SET_USER,
      payload: _data,
    });
  };
};
const removeUser = () => {
  return (dispatch) => {
    dispatch({
      type: Types.REMOVE_USER,
      payload: null,
    });
  };
};
//--------------------------------------white common data
const setDarkTheme = (isDark) => {
  return (dispatch) => {
    dispatch({
      type: Types.SET_DARK_THEME,
      payload: isDark,
    });
  };
};
//--------------------------------------snackbar
const setSnackbar = (open, type = "success", message = "") => {
  return (dispatch) => {
    dispatch({
      type: Types.SET_SNACKBAR,
      payload: { open, type, message },
    });
  };
};

export { setToken, removeToken, setSnackbar, setUser, removeUser, setDarkTheme };
