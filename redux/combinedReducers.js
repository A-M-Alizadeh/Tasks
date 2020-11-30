import { combineReducers } from "redux";
import { userReducer, snackbarReducer, authReducer, whiteCommonDataReducer } from "./common/reducer";
const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  snackbar: snackbarReducer,
  whiteCommonData: whiteCommonDataReducer
});
export default rootReducer;
