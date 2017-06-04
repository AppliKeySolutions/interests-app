import { combineReducers } from 'redux';

import app from './appReducer';
import community from './communityReducer';

export default combineReducers({
  app,
  community,
});
