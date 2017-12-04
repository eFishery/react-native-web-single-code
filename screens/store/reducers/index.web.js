import { combineReducers } from 'redux';

import nav from './nav';
import counter from './counter';
import auth from './auth';

export default combineReducers({ router: nav, auth, counter });
