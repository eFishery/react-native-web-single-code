import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { history } from './store/middlewares';

import { Route, Redirect } from 'react-router';
import { ConnectedRouter, syncHistoryWithStore, push } from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';

import Login from './containers/Login';
import Home from './containers/Home';
import TableView from './containers/TableView';
import DetailView from './containers/DetailView';

const navigation = {navigate: (route) => store.dispatch(push(route))};
const isLoggedIn = () => store.getState().auth.isLoggedIn;

const redirect = (Component, statusMatch, redirectTo) => (props) => {
  if (isLoggedIn() === statusMatch) {
    return <Component navigation={navigation} {...props} />;
  } else {
    return <Redirect to={redirectTo} />;
  }
};

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div className="full-height">
        <Route path="/login" component={redirect(Login, false, '/')} />
        <Route exact path="/" component={redirect(Home, true, '/login')} />
        <Route path="/table-view" component={redirect(TableView, true, '/login')} />
        <Route path="/detail-view" component={redirect(DetailView, true, '/login')} />
      </div>
    </ConnectedRouter>
  </Provider>
);

export default App;
