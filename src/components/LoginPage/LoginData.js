import LoginForm from './LoginForm';
import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { login } from '../02Redux/actions';

import { useHistory } from 'react-router-dom';
function LoginData() {
  const [error, setError] = useState('');
  const history = useHistory();
  // const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  const submit = (values) => {
    let data;

    const settingdata = () => {
      console.log('inside settingdata');
      return new Promise((resolve, reject) => {
        data = {
          userName: values.userName,
          password: values.Password,
        };
        console.log(data);
        if (data.userName !== null) {
          resolve('Data setted successfully');
        } else {
          alert('Please enter the correct details');
          reject('Data Values are not setted succesfully');
        }
      });
    };

    const postingdata = (data) => {
      console.log('inside postingdata');
      return new Promise((resolve, reject) => {
        axios
          .post('http://localhost:5001/api/login', data)
          .then((response) => {
            console.log(response);

            if (response.data.success) {
              localStorage.setItem('token', response.data.data);
              sessionStorage.setItem('isLogged', true);
              dispatch(login());

              setError('');
              resolve('Data setted successfully');
            } else {
              setError('Please Enter valid Crendentials');
              reject('Posting data is not Successful');
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
        history.push('/');
      } catch (err) {
        console.log(err);
      }
    };

    callMe();
  };
  return <LoginForm onSubmit={submit} setError={error}></LoginForm>;
}

export default LoginData;
