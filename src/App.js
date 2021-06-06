import React, { Component } from 'react';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Footer from './components/footer';
import Dashboard from './components/dashboard';
import Login from './components/login';
import Register from './components/register';
import Profile from './components/profile';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

const isLoggedIn = () => {
  return localStorage.getItem('TOKEN_KEY') != null;
};

const SecuredRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isLoggedIn() === true ? (
        <Component {...props} />
      ) : (
        <Redirect to='/login' />
      )
    }
  />
);

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <div>
            {isLoggedIn() && (
              <>
                <Header /> <Sidebar />
              </>
            )}
            <Route path='/register' component={Register} />
            <Route path='/login' component={Login} />
            <SecuredRoute path='/dashboard' component={Dashboard} />
            <SecuredRoute path='/profile' component={Profile} />
            <Route path='/' exact component={Login} />
            {isLoggedIn() && <Footer />}
          </div>
        </Switch>
      </Router>
    );
  }
}
