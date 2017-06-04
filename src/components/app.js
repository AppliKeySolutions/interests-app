import React from 'react';
import { connect } from 'react-redux';

import appAction from '../actions/appActions';

class App extends React.Component {
  componentDidMount() {
    this.props.checkLoginInfo();
  }

  render() {
    console.log('RENDER OF APP');
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  checkLoginInfo: () =>
    dispatch(appAction.checkLoginInfo()),
});

export default connect(null, mapDispatchToProps)(App);
