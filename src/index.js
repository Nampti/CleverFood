import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyles from '../src/GlobalStyles';
import { Context } from '../src/context';
import '../src/assets/icon/fontawesome-free-5.15.3-web/css/all.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context>
      <GlobalStyles>
        <App />
      </GlobalStyles>
    </Context>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
