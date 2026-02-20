import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Box, Button, Grid } from '@mui/material';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ReedingHouse from '../components/ReedingHouse';
import ProcessSection from '../components/ProcessSection';
import MarbleStaircase from '../components/MarbleStaircase';
import ClientsSection from '../components/ClientsSection';
import SwirlingStaircase from '../components/SwirlingStaircase';
import FeaturedProjects from '../components/FeaturedProjects';
import TeamSection from '../components/TeamSection';
import ContactSection from '../components/ContactSection';
import ProjectCard from '../components/ProjectCard';
import Modal from '../components/Modal';
import projectsData from '../data/projects.json';

function HomePage() {
  const [featuredProjects] = useState(projectsData.slice(0, 3));
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <main>
      <HeroSection companyName="WISHBONE+PARTNERS" title="The home of beautiful architecture." />
      <AboutSection />
      <ReedingHouse />
      <ProcessSection steps={[
        { id: 1, title: 'Sketching', icon: 'img/icon1.png', description: 'Initial concepts and blueprints' },
        { id: 2, title: 'Finalizing', icon: 'img/icon2.png', description: 'Detailed planning and approvals' },
        { id: 3, title: 'Building', icon: 'img/icon3.png', description: 'Construction and delivery' }
      ]} />
      <MarbleStaircase />
      <ClientsSection />
      <SwirlingStaircase />
      <FeaturedProjects />
      
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" align="center" gutterBottom>More Featured Projects</Typography>
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {featuredProjects.map(project => (
            <Grid item xs={12} sm={6} md={4} key={project.id}>
              <ProjectCard project={project} onClick={setSelectedProject} />
            </Grid>
          ))}
        </Grid>
        <Box sx={{ textAlign: 'center' }}>
          <Button component={Link} to="/catalog" variant="outlined" size="large">View all projects →</Button>
        </Box>
      </Container>
      
      <TeamSection />
      <ContactSection />
      
      {selectedProject && <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </main>
  );
}

export default HomePage;