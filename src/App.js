import React, { Component } from 'react';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Footer from './components/footer/';
import Dashboard from './components/dashboard';
import Login from './components/login';
import Register from './components/register';
import Profile from './components/profile';
import PosMachineCreate from './components/posmachine/create';
import PosMachineIndex from './components/posmachine/index';
import PosMachineUpdate from './components/posmachine/update';
import BranchCreate from './components/branch/create';
import BranchUpdate from './components/branch/update';
import BranchIndex from './components/branch/index';
import SupplierCreate from './components/supplier/create';
import SupplierUpdate from './components/supplier/update';
import SupplierIndex from './components/supplier/index';
import ProductCreate from './components/product/create';
import ProductUpdate from './components/product/update';
import ProductIndex from './components/product/index';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import * as loginActions from './actions/login.action';
import { useDispatch, useSelector } from 'react-redux';

//Protected Route

const App = (props) => {
  // const {pathname} = this.props.location;
  useSelector(({ loginReducer }) => loginReducer);
  const SecuredRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        // ternary condition

        loginActions.isLoggedIn() === true ? (
          <Component {...props} />
        ) : (
          <Redirect to='/login' />
        )
      }
    />
  );
  return (
    <Router>
      <Switch>
        <div>
          {loginActions.isLoggedIn() && <Header />}
          {loginActions.isLoggedIn() && <Sidebar />}
          <Route path='/register' component={Register} />
          <Route path='/login/:notify?' component={Login} />
          <SecuredRoute path='/dashboard' component={Dashboard} />
          <SecuredRoute path='/profile' component={Profile} />
          <SecuredRoute exact path='/posmachine/' component={PosMachineIndex} />
          <SecuredRoute
            path='/posmachine/create'
            component={PosMachineCreate}
          />
          <SecuredRoute
            path='/posmachine/update/:id'
            component={PosMachineUpdate}
          />
          <SecuredRoute exact path='/branch/' component={BranchIndex} />
          <SecuredRoute path='/branch/create' component={BranchCreate} />
          <SecuredRoute path='/branch/update/:id' component={BranchUpdate} />
          <SecuredRoute exact path='/supplier/' component={SupplierIndex} />
          <SecuredRoute path='/supplier/create' component={SupplierCreate} />
          <SecuredRoute
            path='/supplier/update/:id'
            component={SupplierUpdate}
          />
          <SecuredRoute exact path='/product/' component={ProductIndex} />
          <SecuredRoute path='/product/create' component={ProductCreate} />
          <SecuredRoute path='/product/update/:id' component={ProductUpdate} />

          <Route path='/' exact component={Login} />
          {loginActions.isLoggedIn() && <Footer />}
        </div>
      </Switch>
    </Router>
  );
};
export default App;
