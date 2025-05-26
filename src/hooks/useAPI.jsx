'use client';
import { useState } from 'react';
import axios from 'axios';

const useAPI = (
  url,
  apiKey,
  config = () => ({
    'Content-Type': 'application/json',
    'x-api-key': apiKey,
  })
) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const get = async () => {
    setLoading(true);
    try {
      const res = await axios.get(url, { headers: config() });
      setData(res.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const del = async id => {
    setLoading(true);
    try {
      await axios.delete(`${url}/${id}`, { headers: config() });
      setData(prev => prev.filter(item => item.id !== id));
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const post = async body => {
    setLoading(true);
    try {
      const res = await axios.post(url, body, { headers: config() });
      setData(prev => [...prev, res.data]);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const put = async body => {
    setLoading(true);
    try {
      const res = await axios.put(`${url}/${body.id}`, body, {
        headers: config(),
      });
      setData(prev =>
        prev.map(item => (item.id === body.id ? res.data : item))
      );
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, get, del, post, put };
};

export default useAPI;
