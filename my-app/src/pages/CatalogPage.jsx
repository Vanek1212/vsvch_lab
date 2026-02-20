import React, { useState, useMemo } from 'react';
import { Container, Typography, TextField, Select, MenuItem, FormControl, InputLabel, Box, Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ProjectCard from '../components/ProjectCard';
import Modal from '../components/Modal';
import projectsData from '../data/projects.json';

function CatalogPage() {
  const [projects] = useState(projectsData);
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    let result = [...projects];
    if (searchQuery) result = result.filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase()));
    if (filter !== 'all') result = result.filter(p => p.category === filter);
    switch(sortBy) {
      case 'price-low': result.sort((a, b) => a.price - b.price); break;
      case 'price-high': result.sort((a, b) => b.price - a.price); break;
      case 'newest': result.sort((a, b) => b.year - a.year); break;
      case 'area': result.sort((a, b) => b.area - a.area); break;
      default: break;
    }
    return result;
  }, [projects, filter, sortBy, searchQuery]);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" align="center" gutterBottom>Our Projects</Typography>
      <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 4 }}>
        Explore our portfolio of architectural excellence
      </Typography>
      
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center', mb: 4 }}>
        <TextField
          placeholder="Поиск проектов..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          InputProps={{ startAdornment: <SearchIcon color="action" sx={{ mr: 1 }} /> }}
          sx={{ minWidth: 250 }}
        />
        <FormControl sx={{ minWidth: 150 }}>
          <InputLabel>Категория</InputLabel>
          <Select value={filter} label="Категория" onChange={(e) => setFilter(e.target.value)}>
            <MenuItem value="all">Все</MenuItem>
            <MenuItem value="residential">Жилые</MenuItem>
            <MenuItem value="commercial">Коммерческие</MenuItem>
            <MenuItem value="cultural">Культурные</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ minWidth: 150 }}>
          <InputLabel>Сортировка</InputLabel>
          <Select value={sortBy} label="Сортировка" onChange={(e) => setSortBy(e.target.value)}>
            <MenuItem value="newest">Сначала новые</MenuItem>
            <MenuItem value="price-low">Цена: низкая → высокая</MenuItem>
            <MenuItem value="price-high">Цена: высокая → низкая</MenuItem>
            <MenuItem value="area">Площадь</MenuItem>
          </Select>
        </FormControl>
      </Box>
      
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        Найдено: {filteredProjects.length} проектов
      </Typography>
      
      <Grid container spacing={3}>
        {filteredProjects.map(project => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <ProjectCard project={project} onClick={setSelectedProject} />
          </Grid>
        ))}
      </Grid>
      
      {selectedProject && <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </Container>
  );
}

export default CatalogPage;