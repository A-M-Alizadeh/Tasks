import * as Types from "./types";

const initialAuth = {
  token: null,
  isLoggedIn: false,
};
const initialUser = {};
const initialSnackbar = {
  open: null,
  type: "success",
  message: null,
};
const InitialWhiteCOmmonData = {
  isDark: true,
};

//------------------------------------------------------------------------------user
export const authReducer = (state = initialAuth, action = {}) => {
  switch (action.type) {
    case Types.SET_TOKEN: {
      return {
        ...state,
        isLoggedIn: true,
        token: action.payload,
      };
    }
    case Types.REMOVE_TOKEN: {
      return {
        ...state,
        isLoggedIn: false,
        token: action.payload,
      };
    }
    default:
      return state;
  }
};
//------------------------------------------------------------------------------user
export const userReducer = (state = initialUser, action = {}) => {
  switch (action.type) {
    case Types.SET_USER: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case Types.REMOVE_USER: {
      return {
        state: null,
      };
    }
    default:
      return state;
  }
};
//------------------------------------------------------------------------------ white common data
export const whiteCommonDataReducer = (state = InitialWhiteCOmmonData, action = {}) => {
  switch (action.type) {
    case Types.SET_DARK_THEME: {
      return {
        ...state,
        isDark: action.payload
      };
    }
    default:
      return state;
  }
};
//------------------------------------------------------------------------------snackbar
export const snackbarReducer = (state = initialSnackbar, action = {}) => {
  switch (action.type) {
    case Types.SET_SNACKBAR: {
      const { open, type, message } = action.payload;
      return {
        ...state,
        open,
        type,
        message,
      };
    }
    default:
      return state;
  }
};
