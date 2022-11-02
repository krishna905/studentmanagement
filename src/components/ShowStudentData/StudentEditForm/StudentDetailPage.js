import StudentEditForm from './StudentEditForm';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Navbar from '../../StudentProfile/Navbar';
import Footer from '../../StudentProfile/Footer';
function StudentDetailPage() {
  const history = useHistory();

  const submit = (values) => {
    let data;
    let FeeStatus;
    const settingdata = () => {
      console.log('inside settingdata');
      if (values.FeeStatus === 'Paid') {
        FeeStatus = true;
      } else {
        FeeStatus = false;
      }
      return new Promise((resolve, reject) => {
        data = {
          StudentName: values.StudentName,
          CollegeId: values.CollegeID,
          EmailId: values.EmailID,
          FeeStatus: FeeStatus,
          // FeeType: values.FeeType,
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

    const postingdata = (data) => {
      console.log('inside postingdata');
      return new Promise((resolve, reject) => {
        axios
          .post('http://localhost:5001/api/student', data, {
            headers: {
              Authorization: localStorage.getItem('token'),
            },
          })
          .then((response) => {
            console.log(response);
            if (response !== null) {
              resolve('Data setted successfully');
            } else {
              reject('Posting data is not Successful');
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
        await postingdata(data);
        history.push('/');
      } catch (err) {
        console.log(err);
      }
    };

    callMe();
  };
  return (
    <div className="StudentDetailPage">
      <Navbar></Navbar>
      <StudentEditForm onSubmit={submit}></StudentEditForm>
      <Footer></Footer>
    </div>
  );
}

export default StudentDetailPage;
