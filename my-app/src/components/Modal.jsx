import React from 'react';
import {
  Dialog, DialogTitle, DialogContent, IconButton, Typography, Box, Grid, Button, Chip
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function Modal({ project, onClose }) {
  return (
    <Dialog open={true} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h5">{project.title}</Typography>
        <IconButton onClick={onClose}><CloseIcon /></IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Box component="img" src={project.image} sx={{ width: '100%', borderRadius: 2 }} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Chip label={project.category} color="primary" sx={{ mb: 2, textTransform: 'uppercase' }} />
            <Typography variant="h4" gutterBottom>{project.title}</Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>📍 {project.location}</Typography>
            <Typography variant="body1" paragraph>{project.description}</Typography>
            <Box sx={{ display: 'flex', gap: 4, my: 3, p: 2, backgroundColor: '#f5f5f5', borderRadius: 2 }}>
              <Box>
                <Typography variant="caption" color="text.secondary">Площадь</Typography>
                <Typography variant="h6">{project.area} м²</Typography>
              </Box>
              <Box>
                <Typography variant="caption" color="text.secondary">Год</Typography>
                <Typography variant="h6">{project.year}</Typography>
              </Box>
              <Box>
                <Typography variant="caption" color="text.secondary">Архитектор</Typography>
                <Typography variant="h6">{project.architect}</Typography>
              </Box>
            </Box>
            <Typography variant="h4" color="primary" gutterBottom>${project.price.toLocaleString()}</Typography>
            <Button variant="contained" size="large" fullWidth>Связаться с нами</Button>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}

export default Modal;