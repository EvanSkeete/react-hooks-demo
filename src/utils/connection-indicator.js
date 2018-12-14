import React from 'react';

export default ({ connected }) => (
  <div className={connected ? 'connected' : 'disconnected'}>
    {connected ? 'connected' : 'disconnected'}
  </div>
);
