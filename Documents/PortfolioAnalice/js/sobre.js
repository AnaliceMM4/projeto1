import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './footer.css';
import App from './App';
import Nav from './Nav';
import reportWebVitals from './reportWebVitals';

const roo = ReactDOM.createRoot(document.getElementById('roo'));
roo.render(
  <React.StrictMode>
    <Nav />
    <App />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
