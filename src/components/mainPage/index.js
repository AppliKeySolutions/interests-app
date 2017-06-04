import { connect } from 'react-redux';

import MainPage from './mainPage';
import appAction from '../../actions/appActions';
import communityAction from '../../actions/communityActions';

const mapStateToProps = state => ({
  token: state.app.get('token'),
});

const mapDispatchToProps = dispatch => ({
  signIn: user =>
    dispatch(appAction.signIn(user)),
  getAllCommunities: token =>
    dispatch(communityAction.getAllCommunities(token)),
  signOut: token =>
    dispatch(appAction.signOut(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
