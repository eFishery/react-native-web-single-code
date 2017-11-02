import { StackNavigator, NavigationActions } from 'react-navigation';
import { Platform } from 'react-native';
// Relative imports
import ScheduleViewer from './screens/ScheduleViewer';
// import ScheduleManipulator from './screens/ScheduleManipulator';

let App = ScheduleViewer;

// if (Platform.OS !== 'web') {
//   App = StackNavigator({
//     Home: { screen: ScheduleViewer, path: '' },
//   });

//   // Modify how router works
//   const defaultGetStateForAction = App.router.getStateForAction;

//   App.router.getStateForAction = (action, state) => {
//     if (state && action.type === NavigationActions.NAVIGATE) {
//       const { routes } = state;

//       const getIndexOfRoute = routes.findIndex(({ routeName }) => routeName === action.routeName);
//       const newLength = getIndexOfRoute === -1 ? routes.length : getIndexOfRoute;
//       const newRoutes = routes.slice(0, newLength).concat({
//         key: action.routeName,
//         routeName: action.routeName,
//       });

//       return {
//         ...state,
//         routes: newRoutes,
//         index: newRoutes.length - 1,
//       };
//     }

//     return defaultGetStateForAction(action, state);
//   };
// }

export default App;
