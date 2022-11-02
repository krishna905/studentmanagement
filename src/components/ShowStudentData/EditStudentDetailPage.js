import React from 'react';
import EditStudentForm from './EditStudentEditForm copy';
import axios from 'axios';
function EditStudentDetailPage({ studentData }) {
  console.log('inside EditStudentDetailPage.js');
  const submit = (values) => {
    let data;
    let FeeStatus;
    const settingdata = () => {
      console.log('inside settingdata');
      if (values.FeeStatus === 'Paid') {
        FeeStatus = 'true';
      } else {
        FeeStatus = 'false';
      }
      return new Promise((resolve, reject) => {
        data = {
          StudentName: values.StudentName,
          CollegeId: values.CollegeID,
          EmailId: values.EmailID,
          FeeStatus,
          PhoneNo: values.PhoneNumber,
          bio: values.Comments,
        };
        console.log(data);
        if (data.StudentName !== null) {
          resolve('Data setted successfully');
        } else {
          reject('Data Values are not setted succesfully');
        }
      });
    };

    const puttingdata = (data) => {
      console.log('inside Posting Data');
      console.log(data);
      console.log(typeof Number(data.CollegeId));
      return new Promise((resolve, reject) => {
        axios
          .put(
            `http://localhost:5001/api/updateStudent/${Number(data.CollegeId)}`,
            data,
            {
              headers: {
                Authorization: localStorage.getItem('token'),
              },
            }
          )
          .then((response) => {
            console.log(response);
            if (response !== null) {
              resolve('Data Edited successfully');
            } else {
              reject('Editing data is not Successful');
            }
          })
          .catch((err) => {
            if (err.response) {
              // Request made and server responded
              console.log('response error');
              // setIsPending(false);
              // setError(err.message);
              console.log(err.message);
              console.log(err.response);
            } else if (err.request) {
              // The request was made but no response was received
              console.log('request error');
              // setIsPending(false);
              // setError(err.message);
              console.log(err.message);
              console.log(err.response);
            } else {
              // setIsPending(false);
              // setError(err.message);
              console.log(err.message);
              console.log(err.response);
            }
          });
      });
    };

    const callMe = async () => {
      try {
        await settingdata();
        console.log('data set is complete');
        await puttingdata(data);
        // eslint-disable-next-line no-restricted-globals
        // history.push('/');
      } catch (err) {
        console.log(err);
      }
    };

    callMe();
  };
  return (
    <div className="StudentDetailPage">
      <EditStudentForm onSubmit={submit}></EditStudentForm>
    </div>
  );
}

export default EditStudentDetailPage;
