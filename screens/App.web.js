import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import WebRouter from './routers';

const App = () => (
  <Provider store={store}>
    <WebRouter />
  </Provider>
);

export default App;
