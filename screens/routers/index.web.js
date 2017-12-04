import React from 'react';
import { Route, Redirect } from 'react-router';
import { ConnectedRouter, push } from 'react-router-redux';

import store from '../store';
import { history } from '../store/middlewares';
import Login from '../containers/Login';
import Home from '../containers/Home.web';
import TableView from '../containers/TableView.web';
import DetailView from '../containers/DetailView.web';

const navigation = { navigate: route => store.dispatch(push(route)) };
const isLoggedIn = () => store.getState().auth.isLoggedIn;

const redirect = (Component, statusMatch, redirectTo) => (props) => {
  if (isLoggedIn() === statusMatch) {
    return <Component navigation={navigation} {...props} />;
  }
  return <Redirect to={redirectTo} />;
};

const WebRouter = () => (
  <ConnectedRouter history={history}>
    <div className="full-height">
      <Route path="/login" component={redirect(Login, false, '/')} />
      <Route exact path="/" component={redirect(Home, true, '/login')} />
      <Route path="/table-view" component={redirect(TableView, true, '/login')} />
      <Route path="/detail-view" component={redirect(DetailView, true, '/login')} />
    </div>
  </ConnectedRouter>
);

export default WebRouter;
