import React from 'react';
import ReactDOM from 'react-dom/client';
import Tabs from './Tabs';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
document.body.setAttribute('style', 'background: #F5F5FA;');
root.render(
  <React.StrictMode>
    <Tabs />
  </React.StrictMode>
);
