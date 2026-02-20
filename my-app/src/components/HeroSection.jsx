import React from 'react';
import { Box, Typography, Container } from '@mui/material';

function HeroSection({ companyName, title }) {
  return (
    <Box sx={{ backgroundColor: '#ece7e4', py: 8 }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 4, flexWrap: 'wrap' }}>
          {/* Текст слева */}
          <Box sx={{ flex: 1, minWidth: 300 }}>
            <Typography variant="overline" sx={{ letterSpacing: 2, color: 'text.secondary', mb: 2 }}>
              {companyName}
            </Typography>
            <Typography variant="h2" sx={{ fontWeight: 400, mb: 3, lineHeight: 1.2 }}>
              {title}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              We are an architecture firm with a focus on beautiful but functional design.
            </Typography>
            <Typography variant="button" sx={{ textDecoration: 'underline', cursor: 'pointer' }}>
              Read more
            </Typography>
          </Box>
          {/* Картинка справа */}
          <Box sx={{ flex: 1, minWidth: 300 }}>
            <img src="img/image.png" alt="Architecture" style={{ width: '100%', height: 'auto' }} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default HeroSection;