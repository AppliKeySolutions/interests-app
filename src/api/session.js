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

const signOut = () => {

};

export default {
  signIn,
  signOut,
};
