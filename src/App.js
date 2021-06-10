import React, { Component } from 'react';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Footer from './components/footer';
import Dashboard from './components/dashboard';
import Login from './components/login';
import Register from './components/register';
import Profile from './components/profile';
import PosMachineCreate from './components/posmachine_create';
import PosMachineIndex from './components/posmachine_index';
import PosMachineUpdate from './components/posmachine_update';
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
          <Route path='/' exact component={Login} />
          {loginActions.isLoggedIn() && <Footer />}
        </div>
      </Switch>
    </Router>
  );
};
export default App;
