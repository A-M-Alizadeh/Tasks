import * as Types from './types';
const initialAuth = {
  access_token: null,
  isLoggedIn: false,
};
const initialUser = {
  usersList: [],
  currentUser: null,
};

//------------------------------------------------------------------------------user
export const authReducer = (state = initialAuth, action = {}) => {
  switch (action.type) {
    case Types.SET_LOGIN: {
      return {
        ...state,
        isLoggedIn: true,
        access_token: action.payload,
      };
    }
    case Types.SET_LOGOUT: {
      return {
        ...state,
        isLoggedIn: false,
        access_token: null,
      };
    }
    default:
      return state;
  }
};
//------------------------------------------------------------------------------user
export const userReducer = (state = initialUser, action = {}) => {
  switch (action.type) {
    case Types.CREATE_USER: {
      return {
        ...state,
        usersList: [...state.usersList, action.payload],
      };
    }
    case Types.SET_CURRENT_USER: {
      return {
        ...state,
        currentUser: action.payload,
      };
    }
    case Types.REMOVE_CURRENT_USER: {
      return {
        ...state,
        currentUser: null,
      };
    }
    default:
      return state;
  }
};
