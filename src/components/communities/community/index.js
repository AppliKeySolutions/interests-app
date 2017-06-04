import { connect } from 'react-redux';

import Community from './community';
import communityAction from '../../../actions/communityActions';

const mapStateToProps = state => ({
  list: state.community.get('communitiesList'),
  currentCommunity: state.community.get('currentCommunity'),
});

const mapDispatchToProps = dispatch => ({
  getAllCommunities: () =>
    dispatch(communityAction.getAllCommunities()),
  getCommunityById: id =>
    dispatch(communityAction.getCommunityById(id)),
  joinCommunity: (id, token) =>
    dispatch(communityAction.joinCommunity(id, token)),
  leaveCommunity: (id, token) =>
    dispatch(communityAction.leaveCommunity(id, token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Community);
