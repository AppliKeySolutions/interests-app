import { connect } from 'react-redux';

import Communities from './communities';
import communityAction from '../../actions/communityActions';

const mapStateToProps = state => ({
  list: state.community.get('communitiesList'),
  // list: state.community.communitiesList,
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
  changeCurrentCommunity: id =>
    dispatch(communityAction.changeCurrentCommunity(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Communities);
