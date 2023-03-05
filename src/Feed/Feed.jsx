import React, { useState, useEffect } from "react";
import { doc, getFirestore, collection, getDoc, getDocs, setDoc } from "firebase/firestore";
import { HeartIcon, ChatIcon } from "@heroicons/react/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/solid";
import { getAuth } from "firebase/auth";
import firebaseApp from "../firebase_config.js";




const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [showModal, setShowModal] = useState(false);


  useEffect(() => {
    const fetchPosts = async () => {
      const postsCollection = collection(db, "posts");
      const postsSnapshot = await getDocs(postsCollection);
      const postsList = postsSnapshot.docs.map((doc) => {
        const data = doc.data();
        const id = doc.id;
        return { id, ...data };
      });
      setPosts(postsList);
      console.log("postsList: ", postsList);
    };

    fetchPosts();
  }, []);

  const toggleLike = (postIndex) => {
    setPosts((prevPosts) => {
      // likes is a number so we need to increment it
      const updatedPosts = [...prevPosts];
      const post = updatedPosts.find((post) => post.id === postIndex);
      post.likes += 1;
      return updatedPosts;
    });
  };

  const toggleComments = (postId) => {
    setPosts((prevPosts) => {
      const updatedPosts = [  ...prevPosts];
      const post = updatedPosts.find((post) => post.id === postId);
      post.showComments = !post.showComments;
      return updatedPosts;
    });
  };

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-1">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold text-gray-800">{post.title}</h2>
            </div>
            <div className="flex items-center mt-4">
              <img
                src={post.creatorImage}
                alt=""
                className="h-8 w-8 rounded-full mr-2 object-cover"
              />
              <div className="font-bold text-gray-900">{post.creatorName}</div>
            </div>
            <div className="mt-4">
              <img
                src={post.url}
                alt=""
                // make the image responsive to 400px zoom out
                className="w-full object-cover rounded-lg h-96"
              />
            </div>
            <div className="mt-4">
              <div className="flex items-center">
                <button
                  onClick={() => toggleLike(post.id)}
                  className="flex items-center space-x-1 text-gray-500 hover:text-red-500 focus:outline-none"
                >
                  {post.likes ? (
                    <HeartIconSolid className="h-5 w-5" />
                  ) : (
                    <HeartIcon className="h-5 w-5" />
                  )}
                  <span className="font-semibold">{post.likes}</span>
                </button>
                <button className="flex items-center space-x-1 ml-4 text-gray-500 hover:text-blue-500 focus:outline-none">
                  <ChatIcon className="h-5 w-5" />
                  <span className="font-semibold">{post.comments.length}</span>
                  {/* // open comments */}
                  <button
                    onClick={() => toggleComments(post.comments)}
                    className="flex items-center space-x-1 ml-4 text-gray-500 hover:text-blue-500 focus:outline-none"
                  ></button>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;
