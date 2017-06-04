import { Map, List, fromJS } from 'immutable';

import constant from '../constants/communityConstants';
import appConstant from '../constants/appConstants';

const initialState = Map({
  communitiesList: [],
  currentCommunity: 1,
});

export default function (state = initialState, action) {
  console.log('HERE', action);
  switch (action.type) {
    case constant.GET_ALL_COMMUNITIES:
      return state
        .set('communitiesList', action.list);
      // return { ...state, communitiesList: action.list };
    case constant.JOIN_COMMUNITY:
      const arr = [...state.get('communitiesList')];
      // const arr = [...state.communitiesList];
      let index = 1;
      arr.forEach((item, i) => {
        if (item.id === action.id) {
          index = i;
        }
      });
      arr[index].is_member = true;
      return state
        .set('communitiesList', arr);

      // return { ...state, communitiesList: arr };
    case constant.LEAVE_COMMUNITY:
      const arr2 = [...state.get('communitiesList')];
      // const arr2 = [...state.communitiesList];
      let index2 = 1;
      arr2.forEach((item, i) => {
        if (item.id === action.id) {
          index2 = i;
        }
      });
      arr2[index2].is_member = false;
      return state
        .set('communitiesList', arr2);

      // return { ...state, communitiesList: arr2 };
    case constant.CHANGE_CURRENT_COMMUNITY:
      return state
        .set('currentCommunity', action.id);
      // return { ...state, currentCommunity: action.id };
    case constant.ADD_NEW_COMMUNITY:
      const arr3 = [...state.get('communitiesList')];
      arr3.push(action.community);
      return state
        .set('communitiesList', arr3);
    case appConstant.USER_USER_LOGGED_OUT:
      return state
        .set('communitiesList', initialState.get('communitiesList'))
        .set('currentCommunity', initialState.get('currentCommunity'));
    default:
      return state;
  }
}
