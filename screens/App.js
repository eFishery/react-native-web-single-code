import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import NavigatorContainer from './containers/NavigatorContainer';

const App = () => (
  <Provider store={store}>
    <NavigatorContainer />
  </Provider>
);

export default App;
