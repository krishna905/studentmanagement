import React from 'react';

import { useSelector } from 'react-redux';

import Post from './Post';
import './card.css'
const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);


  return (
  
    <div className="container grid-container " alignItems="stretch" spacing={3}>
      {posts.map((post) => (
        <div className="grid-item" key={post._id} item>
          <Post className="col" post={post} setCurrentId={setCurrentId} />
        </div>
      ))}
    </div>
  
  );
 
};

export default Posts;
