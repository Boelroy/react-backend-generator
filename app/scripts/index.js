'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import configureStores from './stores/configureStores';

import './utils/style/index.scss';

const store = configureStores();

ReactDom.render(
  <Provider store={store}>
  <App/>
  </Provider>
 , document.getElementById('app'))
