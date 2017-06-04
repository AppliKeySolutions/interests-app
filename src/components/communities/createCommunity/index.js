import { connect } from 'react-redux';

import CreateCommunity from './createCommunity';
import communityAction from '../../../actions/communityActions';

const mapStateToProps = state => ({
  list: state.community.get('communitiesList'),
  currentCommunity: state.community.get('currentCommunity'),
});

const mapDispatchToProps = dispatch => ({
  // getAllCommunities: () =>
  //   dispatch(communityAction.getAllCommunities()),
  // getCommunityById: id =>
  //   dispatch(communityAction.getCommunityById(id)),
  // joinCommunity: (id, token) =>
  //   dispatch(communityAction.joinCommunity(id, token)),
  // leaveCommunity: (id, token) =>
  //   dispatch(communityAction.leaveCommunity(id, token)),
  createCommunity: (community, token) =>
    dispatch(communityAction.createCommunity(community, token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateCommunity);
