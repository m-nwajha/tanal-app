'use client';

import { useEffect, useState } from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
const WhatsappIcon = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // delay showing the button for animation effect
    const timer = setTimeout(() => setShow(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <a
      href='https://wa.me/9665XXXXXXX'
      target='_blank'
      rel='noopener noreferrer'
      style={{
        position: 'fixed',
        bottom: '20px',
        left: '20px',
        zIndex: 9999,
        textDecoration: 'none',
        transition: 'transform 0.4s ease, opacity 0.4s ease',
        transform: show ? 'scale(1)' : 'scale(0.5)',
        opacity: show ? 1 : 0,
      }}>
      <div
        style={{
          position: 'relative',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: '#25D366',
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
          animation: show ? 'pulse 2s infinite' : 'none',
        }}>
        {/* أيقونة واتساب */}
        <WhatsAppIcon fontSize='large' />

        <span
          style={{
            position: 'absolute',
            top: '2px',
            right: '2px',
            width: '10px',
            height: '10px',
            backgroundColor: 'red',
            borderRadius: '50%',
            border: '2px solid white',
          }}
        />
      </div>

      <style jsx>{`
        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(37, 211, 102, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
          }
        }
      `}</style>
    </a>
  );
};

export default WhatsappIcon;
