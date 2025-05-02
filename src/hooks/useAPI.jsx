'use client';
// Import React Hooks
import { useState } from 'react';

// Import Axios.
import axios from 'axios';

const useAPI = (url, config) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const get = async () => {
    try {
      const res = await axios.get(url, config);
      setData(res.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  const del = async id => {
    try {
      const res = await axios.delete(`${url}/${id}`, config);
      setData(data.filter(item => item.id !== id));
    } catch (error) {
      console.log(error.message);
    }
  };
  const post = async body => {
    try {
      const res = await axios.post(`${url}`, body, config);
      setData(prevState => [...prevState, res.data]);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  const put = async body => {
    try {
      const res = await axios.post(`${url}`, body, config);
      setData(prevState =>
        prevState.map(item => {
          return body.id === item.id ? res.data : item;
        })
      );
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  return {
    data,
    loading,
    error,
    get,
    del,
    post,
    put
  };
};

export default useAPI;
