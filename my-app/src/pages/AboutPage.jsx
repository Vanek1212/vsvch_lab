import React from 'react';
import { Container, Typography, Box, Grid, Avatar, Paper } from '@mui/material';
import teamData from '../data/team.json';

function AboutPage() {
  return (
    <main>
      <Paper sx={{ backgroundColor: '#ece7e4', py: 8, mb: 4, textAlign: 'center' }}>
        <Container maxWidth="lg">
          <Typography variant="h2" gutterBottom>About Us</Typography>
          <Typography variant="h5" color="text.secondary">Learn more about our firm and team</Typography>
        </Container>
      </Paper>
      
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Grid container spacing={6} alignItems="center" sx={{ mb: 8 }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>Our Story</Typography>
            <Typography variant="body1" paragraph>
              Founded in 2010, Wishbone+Partners has grown from a small studio to an internationally recognized architecture firm.
            </Typography>
            <Typography variant="body1">Our team works collaboratively to create spaces that inspire and endure.</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <Box sx={{ textAlign: 'center', p: 2, backgroundColor: '#f5f5f5', borderRadius: 2 }}>
                  <Typography variant="h3" color="primary">150+</Typography>
                  <Typography variant="body2">Projects</Typography>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box sx={{ textAlign: 'center', p: 2, backgroundColor: '#f5f5f5', borderRadius: 2 }}>
                  <Typography variant="h3" color="primary">15</Typography>
                  <Typography variant="body2">Years</Typography>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box sx={{ textAlign: 'center', p: 2, backgroundColor: '#f5f5f5', borderRadius: 2 }}>
                  <Typography variant="h3" color="primary">12</Typography>
                  <Typography variant="body2">Awards</Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        
        <Typography variant="h4" align="center" gutterBottom>Meet Our Team</Typography>
        <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 4 }}>
          The creative minds behind our exceptional designs
        </Typography>
        
        <Grid container spacing={3} justifyContent="center">
          {teamData.map(member => (
            <Grid item xs={12} sm={6} md={4} lg={2.4} key={member.id}>
              <Box sx={{ textAlign: 'center' }}>
                <Avatar src={member.image} alt={member.name} sx={{ width: 100, height: 100, mx: 'auto', mb: 2 }} />
                <Typography variant="h6">{member.name}</Typography>
                <Typography variant="body2" color="text.secondary">{member.role}</Typography>
                <Typography variant="caption" display="block">{member.specialization}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        
        <Paper sx={{ mt: 8, py: 6, backgroundColor: '#f5f5f5' }}>
          <Container maxWidth="lg">
            <Typography variant="h4" align="center" gutterBottom>Get in Touch</Typography>
            <Grid container spacing={4} sx={{ mt: 2 }}>
              <Grid item xs={12} md={4}>
                <Typography variant="h6" gutterBottom>Office</Typography>
                <Typography variant="body2">123 Architecture Lane</Typography>
                <Typography variant="body2">New York, NY 10001</Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="h6" gutterBottom>Contact</Typography>
                <Typography variant="body2">hello@wishbone.com</Typography>
                <Typography variant="body2">+1 (555) 123-4567</Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="h6" gutterBottom>Hours</Typography>
                <Typography variant="body2">Mon - Fri: 9:00 - 18:00</Typography>
                <Typography variant="body2">Sat - Sun: Closed</Typography>
              </Grid>
            </Grid>
          </Container>
        </Paper>
      </Container>
    </main>
  );
}

export default AboutPage;