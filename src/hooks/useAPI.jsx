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

  const resetError = () => setError(null);

  const get = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(url, { headers: config() });
      setData(res.data);
    } catch (err) {
      setError(err?.response?.data?.message || 'فشل جلب البيانات');
    } finally {
      setLoading(false);
    }
  };

  const del = async (id, refresh = false) => {
    setLoading(true);
    setError(null);
    try {
      await axios.delete(`${url}/${id}`, { headers: config() });
      if (refresh) {
        await get();
      } else {
        setData(prev => prev.filter(item => item._id !== id)); 
      }
    } catch (err) {
      setError(err?.response?.data?.message || 'فشل الحذف');
    } finally {
      setLoading(false);
    }
  };
  
  const post = async (body, isFormData = false) => {
    setLoading(true);
    setError(null);

    try {
      const headers = config();

      if (isFormData) {
        delete headers['Content-Type']; 
      }

      const res = await axios.post(url, body, { headers });
      setData(prev => [...prev, res.data]);
      return res.data;
    } catch (err) {
      setError(err?.response?.data?.message || 'فشل الإرسال');
      return null;
    } finally {
      setLoading(false);
    }
  };
  

  const put = async (body, isFormData = false) => {
    setLoading(true);
    setError(null);

    try {
      const headers = config();

      if (isFormData) {
        delete headers['Content-Type'];
      }

      const res = await axios.put(`${url}/${body.id}`, body, {
        headers,
      });

      setData(prev =>
        prev.map(item => (item._id === body.id ? res.data : item))
      );

      return res.data;
    } catch (err) {
      setError(err?.response?.data?.message || 'فشل التحديث');
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, get, del, post, put, resetError };
};

export default useAPI;
