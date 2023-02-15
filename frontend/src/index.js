import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import App from './components/app/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
// don't forget to use className as attribute on target elements (react uses className as attribute instead of class).


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
