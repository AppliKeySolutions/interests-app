import { browserHistory } from 'react-router';

import constant from '../constants/appConstants';
import api from '../api';

const signIn = user => (dispatch) => {
  api.session.signIn(user)
    .then((res) => {
      console.log(res);
      console.log(res.headers.authorization);
      localStorage.setItem('token', res.headers.authorization);
      dispatch({
        type: constant.SET_USER_LOGGED_IN,
        token: res.headers.authorization,
        currentUser: res.data,
      });
      browserHistory.push('/main');
    })
    .catch((error) => {
      console.log(error);
    });
};

const signUp = user => (dispatch) => {
  console.log('register');
  api.register.signUp(user)
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
};

const checkLoginInfo = () => (dispatch) => {
  console.log('checkLoginInfo');
  const token = localStorage.getItem('token');
  if (token && token.length > 0) {
    api.session.check(token)
      .then((res) => {
        console.log(res);
        dispatch({
          type: constant.SET_USER_LOGGED_IN,
          token: res.headers.authorization,
          currentUser: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
};

const signOut = token => (dispatch) => {
  api.session.signOut(token)
    .then((res) => {
      console.log(res);
      dispatch({
        type: constant.SER_USER_LOGGED_OUT,
      });
      localStorage.removeItem('token');
      browserHistory.push('/signin');
    })
    .catch((error) => {
      console.log(error);
    });
};

export default {
  signIn,
  signUp,
  checkLoginInfo,
  signOut,
};
