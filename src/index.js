import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import '../node_modules/uikit/dist/css/uikit.css'
import '../node_modules/uikit/dist/css/uikit-core.css'
import '../node_modules/uikit/dist/css/uikit-core.min.css'
import '../node_modules/uikit/dist/css/uikit.min.css'

import '../node_modules/uikit/dist/js/uikit-icons.js'
import '../node_modules/uikit/dist/js/uikit-icons.min.js'
import '../node_modules/uikit/dist/js/uikit.js'
import '../node_modules/uikit/dist/js/uikit.min.js'

import UIkit from '../node_modules/uikit'
import Icons from '../node_modules/uikit/dist/js/uikit-icons'

// loads the Icon plugin
UIkit.use(Icons)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
