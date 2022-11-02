import axios from 'axios';

const url = 'http://localhost:5001/api/faculty';

export const fetchPosts = () => axios.get(url);

export const createPost = (newPost) =>
  axios.post('http://localhost:5001/api/postFaculty', newPost);

export const updatePost = (id, updatedPost) =>
  axios.put(`http://localhost:5001/api/updateFaculty/${id}`, updatedPost);

export const deletePost = (id) =>
  axios.delete(`http://localhost:5001/api/deleteFaculty/${id}`);
