import React from 'react';
import { browserHistory, Router, Route } from 'react-router'
import auth from './lib/auth'

// Components
import App from './components/App'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Logout from './components/Logout'
import About from './components/About'
import PositionSearch from './components/positions/PositionSearchPage';

function requireAuth(nextState, replace) {
  if (!auth.loggedIn()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="login" component={Login} />
      <Route path="logout" component={Logout} />
      <Route path="about" component={About} />
      <Route path="dashboard" component={Dashboard} onEnter={requireAuth} />
      <Route path="positions" component={PositionSearch} />
    </Route>
  </Router>
);
