import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import './input.css';
import reportWebVitals from './reportWebVitals';

import App from './App';
import NotFound from './NotFound';
import SpaceWarp from './SpaceWarp';
import LoginPage from './Auth/Login';
import SignupPage from './Auth/Signup';
import Feed from './Feed/Feed';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './About';
import AddPost from './Feed/AddPost';
import News from './News';
import Jobs from './Jobs';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/test/wrap" element={<SpaceWarp />} />
      
      <Route path="*" element={<h1>404</h1>} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/feed" element={<Feed />} />
      <Route path="/about" element={<About />} />
      <Route path="/addpost" element={<AddPost />} />
      <Route path="/news" element={<News />} />
      <Route path="/jobs" element={<Jobs />} />
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
