import axios from 'axios';

import host from '../constants/config/host';

const signIn = (user, platform = 'web') => {
  const obj = {
    user,
    device_platform: platform,
  };
  return axios.post(
    `${host}user/sessions`,
    obj,
    {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    },
  );
};

const signOut = token =>
  axios.delete(
    `${host}user/sessions`,
    {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'authorization': token,
      },
    },
  );

const check = token =>
  axios.get(
    `${host}user`,
    {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'authorization': token,
      },
    },
  );

export default {
  signIn,
  signOut,
  check,
};
