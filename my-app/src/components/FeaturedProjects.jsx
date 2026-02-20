import React from 'react';
import { Box, Typography, Container, Grid, Button } from '@mui/material';

function FeaturedProjects() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" gutterBottom>Featured projects</Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 600 }}>
        Some of the latest and greatest projects from us here at Wishbone+Partners.
      </Typography>
      
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <img src="img/featuredimg1.jpg" alt="Project 1" style={{ width: '100%', height: 400, objectFit: 'cover' }} />
        </Grid>
        <Grid item xs={12} md={4} sx={{ position: 'relative' }}>
          <img src="img/featuredimg2.jpg" alt="Project 2" style={{ width: '100%', height: 400, objectFit: 'cover' }} />
          <Box sx={{ position: 'absolute', top: 20, left: 20, color: 'white' }}>
            <Typography variant="overline">NEW YORK</Typography>
            <Typography variant="h5">Big Road Brewery</Typography>
          </Box>
          <Button variant="contained" sx={{ position: 'absolute', bottom: 20, left: 20, backgroundColor: '#1b1a1a' }}>
            Read more
          </Button>
        </Grid>
        <Grid item xs={12} md={4}>
          <img src="img/featuredimg3.jpg" alt="Project 3" style={{ width: '100%', height: 400, objectFit: 'cover' }} />
        </Grid>
      </Grid>
      
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="button" sx={{ textDecoration: 'underline' }}>View all projects</Typography>
      </Box>
    </Container>
  );
}

export default FeaturedProjects;