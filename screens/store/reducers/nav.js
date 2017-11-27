import { NavigationActions } from 'react-navigation';

import { AppNavigator } from '../../routers';

const { getStateForAction } = AppNavigator.router;
const initialNavState = getStateForAction(NavigationActions.init());

function nav(state = initialNavState, action) {
  if (action.type === NavigationActions.NAVIGATE) {
    return getStateForAction(action, state);
  }

  return state;
}

export default nav;
