import React, { useState, useEffect } from 'react';
import mockUser from './mockData.js/mockUser';
import useGETAxios from '../../01Hooks/useGETAxios';
import axios from 'axios';

const StudentContext = React.createContext();

const StudentProvider = ({ children }) => {
  useEffect(() => {
    console.log('inside contect.js ');
    SetAllstudents();
  });
  const [studentUser, setStudentUser] = useState(mockUser);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ show: false, msg: '' });

  const { data: allStudents } = useGETAxios(
    'http://localhost:5001/api/student'
  );
  function SetAllstudents() {
    console.log('inside Contextv api');
    console.log(allStudents);
    console.log(allStudents);
  }

  const searchStudentUser = async (user) => {
    toggleError();
    setIsLoading(true);
    const response = await axios(`http://localhost:5001/api/student/${user}`, {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    }).catch((err) => {
      console.log('Inside Error');
      console.log(err);
    });
    console.log(response);

    if (response.data.success === false) {
      toggleError(true, 'Search with College Id');

      setIsLoading(false);
    } else if (response.data.student.length === 0) {
      console.log(response.success);
      // setNotFound(true);
      // console.log(notFound);
      // console.log('enter correct id ');
      toggleError(true, 'there is no user with that CollegeId');
      setIsLoading(false);
    } else {
      // console.log('inside context data is');
      // console.log(response.data);
      // console.log('student data is');
      setStudentUser(response.data.student);
      console.log(studentUser);
      console.log('inside context');
      toggleError();
      setIsLoading(false);
    }
  };

  function toggleError(show = false, msg = '') {
    setError({ show, msg });
  }
  // useEffect(() => {
  //   searchStudentUser(919471);
  // }, [allStudents]);

  return (
    <StudentContext.Provider
      value={{
        studentUser,
        error,
        searchStudentUser,
        isLoading,
        allStudents,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};

export { StudentProvider, StudentContext };
