import React from 'react';
import { Box, Typography, Container, Avatar } from '@mui/material';

function AboutSection() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
        {/* Заголовок */}
        <Box sx={{ flex: '0 0 200px' }}>
          <Typography variant="h4" sx={{ fontWeight: 500 }}>Our firm</Typography>
        </Box>
        {/* Текст */}
        <Box sx={{ flex: 1, minWidth: 300 }}>
          <Typography variant="body1" paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
          </Typography>
          <Typography variant="body1" paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
          {/* Карточка сотрудника */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Avatar src="img/circle1.jpg" alt="Stephen Collier" sx={{ width: 64, height: 64 }} />
            <Box>
              <Typography variant="h6">Stephen Collier</Typography>
              <Typography variant="body2" color="text.secondary">Senior Partner</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default AboutSection;