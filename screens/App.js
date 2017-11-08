import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store.js';
import ScheduleViewerContainer from './containers/ScheduleViewerContainer.js';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ScheduleViewerContainer />
      </Provider>
    );
  }
}

export default App;
