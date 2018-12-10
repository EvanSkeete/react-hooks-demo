import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router';

import './index.css';

import App from './app';
import examples from './examples/index.js';

const Routes = () => (
  <Router>
    {examples.map(({ name, path, component }, index) => (
      <App
        default={index === 0}
        key={path}
        path={path}
        name={name}
        component={component}
      />
    ))}
  </Router>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Routes />);
