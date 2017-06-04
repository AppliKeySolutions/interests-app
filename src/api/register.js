import axios from 'axios';

import host from '../constants/config/host';

const signUp = (user, platform = 'web') => {
  const obj = {
    user: {
      email: user.email,
      name: user.name,
      password: user.password_1,
    },
    device_platform: platform,
  };
  return axios.post(
    `${host}user/registration`,
    obj,
    {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    },
  );
};

export default {
  signUp,
};
