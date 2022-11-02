import AddAdminForm from './AddAdminForm';
import axios from 'axios';

import { useHistory } from 'react-router-dom';
function ShowAdminAddForm() {
  const history = useHistory();

  const submit = (values) => {
    let data;

    const settingdata = () => {
      console.log('inside settingdata');
      return new Promise((resolve, reject) => {
        data = {
          Name: values.Name,
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
          .post('http://localhost:5001/api/addadmin', data, {
            headers: {
              Authorization: localStorage.getItem('token'),
            },
          })
          .then((response) => {
            console.log(response);
            if (response.status === 200) {
              resolve('Data setted successfully');
            } else {
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
  return <AddAdminForm onSubmit={submit}></AddAdminForm>;
}

export default ShowAdminAddForm;
