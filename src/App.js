import React, { createContext, Suspense } from 'react';
import { Link } from '@reach/router';

import './app.css';

import logo from './logo.png';
import examples from './examples/index.js';
import Spinner from './utils/spinner';

const locale = createContext('en');

const Header = ({ name }) => (
  <header className="header">
    <img src={logo} className="logo" alt="logo" />
    <h1 className="heading">{name}</h1>
  </header>
);

const Sidebar = () => (
  <div className="sidebar">
    {examples.map(({ name, path }, index) => (
      <Link className="sidebar-item" key={name} to={path}>
        <div className="sidebar-item__count">{index}</div>
        <div className="sidebar-item__name">{name}</div>
      </Link>
    ))}
  </div>
);

export default ({ name, component: Component }) => {
  return (
    <div className="app">
      <Header name={name} />
      <main className="content">
        <Suspense fallback={<Spinner />}>
          <Component />
        </Suspense>
      </main>
      <Sidebar />
    </div>
  );
};
