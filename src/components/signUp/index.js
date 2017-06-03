import { connect } from 'react-redux';

import SignUp from './signUp';
import appAction from '../../actions/appActions';

const mapDispatchToProps = dispatch => ({
  signIn: user =>
    dispatch(appAction.signIn(user)),
});

export default connect(null, mapDispatchToProps)(SignUp);
