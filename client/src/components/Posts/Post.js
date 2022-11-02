import React from 'react';
import { useDispatch } from 'react-redux';

import {  deletePost } from '../../actions/posts';

import './card.css';
const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
 
  return (
    <div className="card card1 fullHeightCard grid">
      <div>
        <img
          class="card-img-top img media1"
          src={
            post.selectedFile ||
            "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
          }
          alt="Card image cap"
        />
        <div class="card-body ">
      
          <div className="d-flex flex-column">
            <h6 class="title">Name: {post.facultyName}</h6>
            <h6 className="fid">facultyId: {post.facultyId}</h6>
            <h6 className="clno" color="textSecondary">
              Class : {post.classNo}
            </h6>
            <h6 className="email" gutterBottom>
              Email: {post.facultyEmail}
            </h6>

            <h6>Contact No: {post.phone}</h6>
          </div>
        </div>
        <div className="cardActions d-flex justify-content-center">
          <button
            size="small"
            color="primary"
            onClick={() => setCurrentId(post._id)}
            className="btn btn-warning mx-2"
          >
            Edit
          </button>
          <button
            size="small"
            color="primary"
            className="btn btn-danger mx-2"
            onClick={() => dispatch(deletePost(post._id))}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
