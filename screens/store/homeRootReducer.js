import { HomeNavigator } from '../navigators/HomeNavigator';
import counter from './reducers/counter';

// Start with two routes: The Main screen, with the Home screen on top.
const firstAction = HomeNavigator.router.getActionForPathAndParams('Home');
const tempNavState = HomeNavigator.router.getStateForAction(firstAction);
const initialNavState = HomeNavigator.router.getStateForAction(
  firstAction,
  tempNavState,
);

function homeNav(state = initialNavState, action) {
  const nextNavState = state;

  switch (action.routeName) {
    default:
      break;
  }

  // Simply return the original `state` if `nextNavState` is null or undefined.
  return nextNavState;
}

export { homeNav, counter };
