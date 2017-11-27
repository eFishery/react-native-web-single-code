import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import Login from '../containers/Login';
import Drawer from './native/Drawer';

const AppNavigator = StackNavigator({
  Login: { screen: Login, navigationOptions: { header: null } },
  Drawer: { screen: Drawer },
});

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator
    navigation={addNavigationHelpers({ dispatch, state: nav })}
  />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = ({ nav }) => ({ nav });

export { AppNavigator };
export default connect(mapStateToProps)(AppWithNavigationState);
