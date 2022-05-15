import { combineReducers } from 'redux';
import user from './user';
import auth from './auth';
import withdraw from './withdraw';

const rootReducer = combineReducers({
  user,
  auth,
  withdraw,
});

export default rootReducer;
