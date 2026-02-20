import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';

function ProcessSection({ steps }) {
  return (
    <Container maxWidth="lg" sx={{ py: 8, textAlign: 'center' }}>
      <Typography variant="overline" sx={{ letterSpacing: 2, color: 'text.secondary' }}>
        OUR PROCESS
      </Typography>
      <Typography variant="h3" sx={{ mb: 6 }}>
        How we do what we do.
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {steps.map((step) => (
          <Grid item xs={12} sm={6} md={4} key={step.id}>
            <Box sx={{ textAlign: 'center', maxWidth: 300, mx: 'auto' }}>
              <img src={step.icon} alt={step.title} style={{ width: 80, height: 80, marginBottom: 16 }} />
              <Typography variant="h6" sx={{ mb: 1 }}>{step.title}</Typography>
              <Typography variant="body2" color="text.secondary">{step.description}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ProcessSection;