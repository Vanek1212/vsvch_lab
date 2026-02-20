import React from 'react';
import { Box, Typography } from '@mui/material';

function ReedingHouse() {
  return (
    <Box sx={{ position: 'relative', height: 600, overflow: 'hidden' }}>
      <img 
        src="img/img1.jpg" 
        alt="Reeding House" 
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
      <Box 
        sx={{ 
          position: 'absolute', 
          top: '50%', 
          right: '10%', 
          transform: 'translateY(-50%)',
          color: 'white',
          textShadow: '0 2px 4px rgba(0,0,0,0.5)'
        }}
      >
        <Typography variant="overline" sx={{ letterSpacing: 2 }}>REEDING HOUSE</Typography>
        <Typography variant="body1">Lorem ipsum dolor sit amet...</Typography>
      </Box>
    </Box>
  );
}

export default ReedingHouse;