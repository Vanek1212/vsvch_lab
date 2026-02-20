import React from 'react';
import { Box, Typography, Container, Grid, Avatar } from '@mui/material';
import teamData from '../data/team.json';

function TeamSection() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Grid container spacing={4}>
        {/* Заголовок */}
        <Grid item xs={12} md={4}>
          <Typography variant="h4" sx={{ mb: 2 }}>Meet our team</Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
          <Typography variant="button" sx={{ textDecoration: 'underline' }}>
            See team
          </Typography>
        </Grid>
        {/* Список членов команды */}
        <Grid item xs={12} md={8}>
          <Grid container spacing={3}>
            {teamData.map((member) => (
              <Grid item xs={12} sm={6} key={member.id}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  <Avatar src={member.image} alt={member.name} sx={{ width: 56, height: 56 }} />
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>{member.name}</Typography>
                    <Typography variant="body2" color="text.secondary">{member.role}</Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default TeamSection;