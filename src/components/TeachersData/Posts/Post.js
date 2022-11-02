import React from 'react';
import { useDispatch } from 'react-redux';

import { deletePost } from '../../02Redux/actions/';

import './card.css';
const Post = ({ post, setCurrentId }) => {
  console.log(post);
  console.log('inside post.js posting data');
  const dispatch = useDispatch();

  return (
    <div className="card card1 fullHeightCard grid">
      <div>
        <img
          className="card-img-top img media1"
          src={
            post.selectedFile ||
            'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'
          }
          alt="Card  cap"
        />
        <div className="card-body ">
          <div className="d-flex flex-column">
            <h6 className="title">Name: {post.facultyName}</h6>
            <h6 className="fid">facultyId: {post.facultyId}</h6>
            <h6 className="clno" color="textSecondary">
              Class : {post.classNo}
            </h6>
            <h6 className="email">Email: {post.facultyEmail}</h6>

            <h6>Contact No: {post.phone}</h6>
          </div>
        </div>
        <div className="cardActions d-flex justify-content-center">
          <button
            size="small"
            color="primary"
            onClick={() => {
              setCurrentId(post._id);
            }}
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
