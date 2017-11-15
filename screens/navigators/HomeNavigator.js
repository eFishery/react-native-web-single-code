import React from 'react';
import PropTypes from 'prop-types';
import { StackNavigator, NavigationActions, addNavigationHelpers } from 'react-navigation';
import ScheduleViewerContainer from '../containers/ScheduleViewerContainer';

const HomeNavigator = StackNavigator({
  Home: { screen: ScheduleViewerContainer },
}, {
  headerMode: 'none',
});

// Modify how router works
const defaultGetStateForAction = HomeNavigator.router.getStateForAction;

HomeNavigator.router.getStateForAction = (action, state) => {
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

const HomeWithNavigationState = ({ dispatch, nav, screenProps }) => (
  <HomeNavigator
    navigation={addNavigationHelpers({ dispatch, state: nav })}
    screenProps={screenProps}
  />
);

HomeWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
  screenProps: PropTypes.object.isRequired,
};

export { HomeNavigator };
export default HomeWithNavigationState;
