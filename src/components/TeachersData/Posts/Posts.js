import React from 'react';

import { useSelector } from 'react-redux';

import Post from './Post';
import './card.css';
const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  console.log('inside Post.js');
  console.log(posts);

  return (
    <div className="grid-container">
      {posts &&
        posts.map((post) => (
          <div className="grid-item border border-success" key={post._id}>
            <Post className="col" post={post} setCurrentId={setCurrentId} />
          </div>
        ))}
    </div>
  );
};

export default Posts;
