import { connect } from 'react-redux';

import SignUp from './signUp';
import appAction from '../../actions/appActions';

const mapDispatchToProps = dispatch => ({
  signUp: user =>
    dispatch(appAction.signUp(user)),
});

export default connect(null, mapDispatchToProps)(SignUp);
