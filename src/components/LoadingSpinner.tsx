import React from 'react';
import { Box } from '@mui/material';

const LoadingSpinner: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        minHeight: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.6)', 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999, 
      }}
    >
      <img src="/loading.gif" alt="Loading Spinner" />
    </Box>
  );
};

export default LoadingSpinner;
