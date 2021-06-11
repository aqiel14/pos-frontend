import { combineReducers } from 'redux';
import loginReducer from './login.reducer';
import registerReducer from './register.reducer';
import posmachineReducer from './posmachine.reducer';
import branchReducer from './branch.reducer';
import supplierReducer from './supplier.reducer';
export default combineReducers({
  loginReducer,
  registerReducer,
  posmachineReducer,
  branchReducer,
  supplierReducer,
});
