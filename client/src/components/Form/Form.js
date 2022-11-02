import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import './form.css';
import { createPost, updatePost } from '../../actions/posts';

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    facultyName:'',
    facultyId:'',
    classNo:'',
    selectedFile:'',
    facultyEmail:'',
    phone:'',
  });
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({
      facultyName: "",
      facultyId: "",
      classNo: "",
      selectedFile: "",
      facultyEmail: "",
      phone: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
  };

  return (
    <div >
      <div className="form-page1">
        <div className=" form1 bg-white container">
          <div>
            <h2>
              {currentId ? `Editing "${post.facultyName}"` : "Add Faculty"}
            </h2>
          </div>
          <form
            autoComplete="off"
            noValidate
            className="bg-white text-center"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <input
                name="facultyName"
                placeholder="facultyName"
                className="1rem p-3"
                type="text"
                value={postData.facultyName}
                onChange={(e) =>
                  setPostData({ ...postData, facultyName: e.target.value })
                }
              />
            </div>
            <input
              name="facultyId"
              placeholder="facultyId"
              className="1rem p-3"
              type="text"
              value={postData.facultyId}
              onChange={(e) =>
                setPostData({ ...postData, facultyId: e.target.value })
              }
            />
            <input
              name="facultyEmail"
              variant="outlined"
              placeholder="facultyEmail"
              fullWidth
              type="email"
              className="1rem p-3"
              rows={4}
              value={postData.facultyEmail}
              onChange={(e) =>
                setPostData({ ...postData, facultyEmail: e.target.value })
              }
            />
            <input
              name="classNo"
              placeholder="classNo"
              className="1rem p-3"
               value={postData.classNo}
              onChange={(e) =>
                setPostData({ ...postData, classNo: e.target.value })
              }
            />
            <input
              name="title"
              type="number"
              placeholder="phone"
              value={postData.phone}
              onChange={(e) =>
                setPostData({ ...postData, phone: e.target.value })
              }
            />
            <div >
              <FileBase
                type="file"
                multiple={false}
                onDone={({ base64 }) =>
                  setPostData({ ...postData, selectedFile: base64 })
                }
              />
            </div>
            <button
              className="button sub"
              color="primary"
            
              type="submit"
           
            >
              Submit
            </button>
            <button
              className="button clr"
             
              size="small"
              onClick={clear}
          
            >
              Clear
            </button>
          </form>
         
        </div>
      </div>
    </div>
  );
};

export default Form;

