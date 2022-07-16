import React from 'react';
import ReactDOM from 'react-dom/client';
import Tabs from './Tabs';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
document.body.setAttribute('style', 'background: #F5F5FA;');
root.render(
  <React.StrictMode>
    <Tabs />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
