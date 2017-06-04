import { browserHistory } from 'react-router';

import constant from '../constants/communityConstants';
import api from '../api';

const getAllCommunities = (token) => (dispatch) => {
  console.log('YA POSILAYU TOKEN', token);
  api.community.getAll(token)
    .then((res) => {
      console.log(res);
      dispatch({
        type: constant.GET_ALL_COMMUNITIES,
        list: res.data.communities,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

const getCommunityById = (id) => {
  api.community.getById(id)
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
};

const joinCommunity = (id, token) => (dispatch) => {
  api.community.join(id, token)
    .then((res) => {
      console.log(res);
      dispatch({
        type: constant.JOIN_COMMUNITY,
        id,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

const leaveCommunity = (id, token) => (dispatch) => {
  api.community.leave(id, token)
    .then((res) => {
      console.log(res);
      dispatch({
        type: constant.LEAVE_COMMUNITY,
        id,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

const changeCurrentCommunity = (id) => {
  browserHistory.push('/main/community');
  return {
    type: constant.CHANGE_CURRENT_COMMUNITY,
    id,
  };
};

const createCommunity = (community, token) => (dispatch) => {
  api.community.create(community, token)
    .then((res) => {
      console.log(res);
      dispatch({
        type: constant.ADD_NEW_COMMUNITY,
        community: res.data,
      });
      browserHistory.push('/main');
    })
    .catch((error) => {
      console.log(error);
    });
};

export default {
  getAllCommunities,
  getCommunityById,
  joinCommunity,
  leaveCommunity,
  changeCurrentCommunity,
  createCommunity,
};
