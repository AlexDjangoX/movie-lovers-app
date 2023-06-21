import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import ToggleColorMode from '../utils/ToggleColorMode.jsx';

import App from './App.jsx';
import store from './app/store.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToggleColorMode>
        <App />
      </ToggleColorMode>
    </Provider>
  </React.StrictMode>
);
