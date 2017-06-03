import constant from '../constants/appConstants';
import api from '../api';

const signIn = (user) => dispatch => {
  api.session.signIn(user)
    // .then((res) => {
    //   console.log(res);
    //   console.log(res.headers.authorization);
    //   dispatch({
    //     type: constant.SET_USER_LOGGED_IN,
    //     token: 'dsads',
    //     currentUser: res.data,
    //   });
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
  const obj = {
    user,
    device_platform: 'web',
  };
    fetch('http://52.57.146.201/api/v1/user/sessions', {
      method: 'POST',
      body: JSON.stringify(obj),
      headers: { 'Content-Type': 'application/json' },
    })
    .then((res) => {
      console.log(res);
      console.log(res.headers.authorization);
      console.log(res.headers.get('authorization'));
      console.log(res.headers.getAll());
      return res.json();
    })
    .then((res) => {
      console.log(res);
    });;
};

const signUp = (user) => dispatch => {
  console.log('register');
};

export default {
  signIn,
  signUp,
};
