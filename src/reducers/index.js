import { combineReducers } from 'redux';
import loginReducer from './login.reducer';
import registerReducer from './register.reducer';
import posmachineReducer from './posmachine.reducer';
import branchReducer from './branch.reducer';
import supplierReducer from './supplier.reducer';
import productReducer from './product.reducer';
import shopReducer from './shop.reducer';
import statReducer from './stat.reducer';
import orderReducer from './order.reducer';
import userReducer from './user.reducer';
export default combineReducers({
  loginReducer,
  registerReducer,
  posmachineReducer,
  branchReducer,
  supplierReducer,
  productReducer,
  shopReducer,
  statReducer,
  orderReducer,
  userReducer,
});
