import React from 'react';
import { Card, CardMedia, CardContent, Typography, Chip, Box } from '@mui/material';

function ProjectCard({ project, onClick }) {
  return (
    <Card 
      onClick={() => onClick(project)}
      sx={{ 
        cursor: 'pointer',
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': { transform: 'translateY(-8px)', boxShadow: 6 }
      }}
    >
      <CardMedia component="img" height="200" image={project.image} alt={project.title} />
      <CardContent>
        <Chip label={project.category} size="small" color="primary" sx={{ textTransform: 'uppercase', fontSize: '10px', mb: 1 }} />
        <Typography variant="h6" sx={{ fontWeight: 500 }}>{project.title}</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {project.description.substring(0, 80)}...
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="caption" color="text.secondary">{project.year}</Typography>
          <Typography variant="h6" color="primary" sx={{ fontWeight: 600 }}>
            ${(project.price / 1000).toFixed(0)}k
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default ProjectCard;