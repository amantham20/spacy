import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as RocketIcon } from './rocket-icon.svg';
import firebaseApp from '../firebase_config.js';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(firebaseApp);

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setMessage(`Signed in as ${userCredential.user.email}`);
      console.log("userCredential.user.email: ", userCredential.user.email);
      navigate('/feed');
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-indigo-800 flex flex-col justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <div className="flex justify-center items-center mb-4">
          <RocketIcon className="h-8 w-8 mr-2 text-indigo-600" />
          <h2 className="text-lg font-bold text-gray-800">Space Login</h2>
        </div>
        <form onSubmit={handleSubmit}>
        {message && <p className="text-center text-red-500 mt-4">{message}</p>}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
            <input
              type="password"
              id="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="flex justify-end">
            <Link to="/forgot-password" className="text-sm text-indigo-600 hover:text-indigo-800">Forgot Password?</Link>
          </div>
          <div className="mt-4">
            <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Log In
            </button>
          </div>
        </form>
        <div className="mt-6 text-center">
          <span className="text-gray-700">Don't have an account?</span>
          <Link to="/signup" className="text-indigo-600 hover:text-indigo-800 ml-2">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
