import React, { useState, useEffect } from 'react';
import Form from './Form/Form';
import Posts from './Posts/Posts';
import Navbar from '../StudentProfile/Navbar';
import Footer from '../StudentProfile/Footer';
import { useDispatch } from 'react-redux';
import { getPosts } from '../02Redux/actions';
import './Posts/card.css';
function TeachersDataRedux() {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(currentId);
    dispatch(getPosts());
  }, [currentId, dispatch]);
  return (
    <div>
      <Navbar></Navbar>
      <div className="displaygrid">
        <Posts setCurrentId={setCurrentId}></Posts>
        <Form currentId={currentId} setCurrentId={setCurrentId} />
      </div>
      <Footer></Footer>
    </div>
  );
}

export default TeachersDataRedux;
