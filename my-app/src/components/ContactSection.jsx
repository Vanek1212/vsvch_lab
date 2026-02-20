import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';

function ContactSection() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="overline" sx={{ letterSpacing: 2, color: 'text.secondary', mb: 2 }}>
        GET IN TOUCH
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
        <Typography variant="h4" sx={{ maxWidth: 500 }}>
          Think we would be a good fit for your next project?
        </Typography>
        <Button variant="text" sx={{ textDecoration: 'underline', fontSize: '1.1rem' }}>
          Get in touch
        </Button>
      </Box>
    </Container>
  );
}

export default ContactSection;