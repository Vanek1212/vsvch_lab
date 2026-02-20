import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

function Footer({ companyName }) {
  return (
    <Paper component="footer" elevation={0} sx={{ mt: 4, py: 3, backgroundColor: '#f5f5f5' }}>
      <Box sx={{ maxWidth: 1200, mx: 'auto', px: 2, textAlign: 'center' }}>
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
          {companyName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Powered by Webflow. All rights reserved {companyName}, Inc. Licensing
        </Typography>
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center', gap: 2 }}>
          <img src="img/Path.png" alt="Twitter" style={{ width: 24, height: 24 }} />
          <img src="img/Shape.png" alt="Instagram" style={{ width: 24, height: 24 }} />
          <img src="img/Frame (12).png" alt="LinkedIn" style={{ width: 24, height: 24 }} />
        </Box>
      </Box>
    </Paper>
  );
}

export default Footer;