import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import App from '../screens/App';

// App registration and rendering
render(
  <App />,
  document.getElementById('react-root'),
);
