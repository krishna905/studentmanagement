import { useState, useEffect } from 'react';
import axios from 'axios';

const useGETAxios = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cancelToken = axios.CancelToken;
    const source = cancelToken.source();
    axios
      .get(url, {
        headers: {
          authorization: localStorage.getItem('token'),
          cancelToken: source.token,
        },
      })
      .then((response) => {
        // console.log('inside axios');
        // console.log(response.data.student);
        if (response.data.success === false) {
          console.log('Get requestError');
          throw Error('Enter the correct URL');
        } else if (response.data.student.length === 0) {
          console.log('empty so enter correct url');
          throw Error('Enter the correct URL');
        } else {
          // console.log('data recieved successfully');
          // console.log(typeof response.data.success);
          setData(response.data.student);
          // console.log(response.data.student);
        }
      })
      .catch((err) => {
        if (axios.isCancel(err)) {
          console.log('axios request cancelled');
        } else if (err.response) {
          // Request made and server responded
          console.log('response error');
          setIsPending(false);
          setError(err.message);
          console.log(err.message);
          console.log(err.response);
        } else if (err.request) {
          // The request was made but no response was received
          console.log('request error');
          setIsPending(false);
          setError(err.message);
          console.log(err.message);
          console.log(err.response);
        } else {
          setIsPending(false);
          setError(err.message);
          console.log(err.message);
          console.log(err.response);
        }
      });
    //aborting the request
    return () => {
      source.cancel('axios request cancelled');
    };
  }, [url]);

  return { data, isPending, error };
};
export default useGETAxios;
