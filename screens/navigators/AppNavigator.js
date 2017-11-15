import React from 'react';
import PropTypes from 'prop-types';
import { StackNavigator, NavigationActions, addNavigationHelpers } from 'react-navigation';
import Login from '../components/Login';
import HomeContainer from '../containers/HomeContainer';

// Wrapper Component
const HomeWrapper = ({ navigation }) => (
  <HomeContainer screenProps={{ rootNavigation: navigation }} />
);
HomeWrapper.propTypes = {
  navigation: PropTypes.object.isRequired,
};

const AppNavigator = StackNavigator({
  Login: { screen: Login },
  Home: { screen: HomeWrapper },
}, {
  headerMode: 'none',
});

// Modify how router works
const defaultGetStateForAction = AppNavigator.router.getStateForAction;

AppNavigator.router.getStateForAction = (action, state) => {
  if (state && action.type === NavigationActions.NAVIGATE) {
    const { routes } = state;

    const getIndexOfRoute = routes.findIndex(route => route.routeName === action.routeName);
    const newLength = getIndexOfRoute === -1 ? routes.length : getIndexOfRoute;
    const newRoutes = routes.slice(0, newLength).concat({
      key: action.routeName,
      routeName: action.routeName,
    });

    return {
      ...state,
      routes: newRoutes,
      index: newRoutes.length - 1,
    };
  }

  return defaultGetStateForAction(action, state);
};

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator
    navigation={addNavigationHelpers({ dispatch, state: nav })}
  />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

export { AppNavigator };
export default AppWithNavigationState;
