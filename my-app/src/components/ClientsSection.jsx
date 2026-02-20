import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';

function ClientsSection() {
  const clients = [
    { id: 1, src: 'img/Combined-Shape.png', alt: 'Client 1' },
    { id: 2, src: 'img/Combined-Shape (1).png', alt: 'Client 2' },
    { id: 3, src: 'img/Combined-Shape (3).png', alt: 'Client 3' },
    { id: 4, src: 'img/Combined-Shape (2).png', alt: 'Client 4' }
  ];

  return (
    <Box sx={{ backgroundColor: '#403e3b', color: 'white', py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={4}>
            <Typography variant="overline" sx={{ letterSpacing: 2, mb: 2 }}>PRIOR CLIENTS</Typography>
            <Typography variant="h4" sx={{ mb: 2 }}>Happy customers.</Typography>
            <Typography variant="body2" color="grey.400">
              Morbi neque ex, condimentum dapibus congue et.
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <Grid container spacing={4}>
              {clients.map(client => (
                <Grid item xs={6} md={3} key={client.id}>
                  <Box 
                    component="img" 
                    src={client.src} 
                    alt={client.alt}
                    sx={{ width: '100%', maxWidth: 120, filter: 'brightness(0) invert(1)', opacity: 0.8 }}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ClientsSection;