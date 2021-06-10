import { combineReducers } from 'redux';
import loginReducer from './login.reducer';
import registerReducer from './register.reducer';
import posmachineReducer from './posmachine.reducer';
export default combineReducers({
  loginReducer,
  registerReducer,
  posmachineReducer,
});
