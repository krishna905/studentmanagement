import Changepassword from './ChangePasswordForm';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import React from 'react';
function ShowChangePasswordForm() {
  const history = useHistory();

  const submit = (values) => {
    let data;

    const settingdata = () => {
      console.log('inside settingdata');
      return new Promise((resolve, reject) => {
        data = {
          newpassword: values.password,
          token: localStorage.getItem('token'),
        };
        console.log(data);
        if (data.newpassword !== null) {
          resolve('Data setted successfully');
        } else {
          reject('Data Values are not setted succesfully');
        }
      });
    };

    const postingdata = (data) => {
      console.log('inside postingdata');
      return new Promise((resolve, reject) => {
        axios
          .post('http://localhost:5001/api/changepassword', data)
          .then((response) => {
            if (response.status === 200) {
              resolve('Password changed successfully');
            } else {
              reject('Password not changed');
            }
          })
          .catch((err) => {
            if (err.response) {
              console.log('response error');

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
        await postingdata(data);
        alert('Password has Changed Successfully');
        history.push('/dashboard');
      } catch (err) {
        console.log(err);
      }
    };

    callMe();
  };
  return (
    <div>
      <div className="LoginFormRender bg-dark">
        <Changepassword onSubmit={submit}></Changepassword>
      </div>
    </div>
  );
}

export default ShowChangePasswordForm;
