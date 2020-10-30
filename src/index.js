import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { defaults } from 'react-sweet-state';
defaults.devtools = true;

ReactDOM.render(
    <App />,
  document.getElementById('root')
);