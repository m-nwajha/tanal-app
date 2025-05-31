import { useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const theme = useTheme();

  useEffect(() => {
    const move = e => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: position.y,
        left: position.x,
        width: 30,
        height: 30,
        border: `2px solid ${theme.palette.secondary.main}`,
        borderRadius: '50%',
        pointerEvents: 'none',
        transform: 'translate(-50%, -50%)',
        opacity: '0.7',
        zIndex: 9999,
      }}
    />
  );
}
