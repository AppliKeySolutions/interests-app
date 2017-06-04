import axios from 'axios';

import host from '../constants/config/host';

const getAll = (token) => {
  return axios.get(
    `${host}communities`,
    {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'authorization': token || '',
      },
    },
  );
};

const getById = (id) => {
  return axios.get(
    `${host}communities/${id}`,
    {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    },
  );
};

const join = (id, token) =>
  axios.post(
    `${host}communities/${id}/membership`,
    {},
    {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'authorization': token,
      },
    },
  );

const leave = (id, token) =>
  axios.delete(
    `${host}communities/${id}/membership`,
    {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'authorization': token,
      },
    },
  );

const create = (community, token) =>
  axios.post(
    `${host}user/communities`,
    {
      community,
    },
    {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'authorization': token,
      },
    },
  );

export default {
  getAll,
  getById,
  join,
  leave,
  create,
};
