// Make a react component for the add post form and add it to the firestore database.

import React, { useState, useEffect } from "react";
import { doc, getFirestore, collection, getDoc, getDocs, setDoc, addDoc } from "firebase/firestore";
import firebaseApp from "../firebase_config.js";
import { IoRocketSharp } from 'react-icons/io5';
import { FaStar } from 'react-icons/fa';
import { GiCometSpark } from 'react-icons/gi';

const db = getFirestore(firebaseApp);

function AddPost() {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();




    const docRef = await addDoc(collection(db, 'posts'), {
      "creatorEmail" : email,
      "creatorImage" : image,
      "creatorName" : "Anonymous",
      "comments":[],
      "likes": 0,
      "title": title,
      "url": image,
    });
    console.log('Document written with ID: ', docRef.id);
    setTitle('');
    setImage('');
    setEmail('');
  };

  return (
    <div className="max-w-lg mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        <IoRocketSharp className="inline-block mr-2 text-yellow-400" />
        Add a New Post
      </h2>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="text-lg font-bold mb-2 block text-gray-800">
            <FaStar className="inline-block mr-2 text-yellow-400" />
            Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Enter title here"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="text-lg font-bold mb-2 block text-gray-800">
            <GiCometSpark className="inline-block mr-2 text-yellow-400" />
            Image
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Enter image URL here"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="text-lg font-bold mb-2 block text-gray-800">
            <IoRocketSharp className="inline-block mr-2 text-yellow-400" />
            Creator Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="Enter creator email here"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Post
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddPost;
