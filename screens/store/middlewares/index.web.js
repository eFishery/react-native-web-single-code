import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';

const history = createHistory();

export { history };
export default [routerMiddleware(history)];
