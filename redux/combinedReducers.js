import {combineReducers} from 'redux';
import {userReducer, authReducer} from './common/reducer';
const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
});
export default rootReducer;
