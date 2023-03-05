import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './input.css';
import reportWebVitals from './reportWebVitals';

import LoginPage from './Auth/Login';
import SignupPage from './Auth/Signup';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="*" element={<h1>404</h1>} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
