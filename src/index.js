import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { BrowserRouter, Route } from 'react-router-dom';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';

import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store';
// import history from './constants/config/history';

import App from './components/app';
import SignIn from './components/signIn';
import SignUp from './components/signUp';

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
