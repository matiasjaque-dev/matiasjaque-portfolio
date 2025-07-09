import { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import React from 'react';
import Grid from '@mui/material/Grid';

// src/data/projects.js
const projects = [
  {
    id: 1,
    name: 'Portfolio Website',
    image: 'https://source.unsplash.com/random/400x300?portfolio',
    tech: ['React', 'MUI', 'Zustand'],
    description: 'A personal portfolio to showcase my work and skills.',
    github: 'https://github.com/username/portfolio',
    demo: 'https://portfolio.example.com',
  },
  {
    id: 2,
    name: 'E-commerce Store',
    image: 'https://source.unsplash.com/random/400x300?store',
    tech: ['React', 'Node.js', 'MongoDB'],
    description: 'A simple online store with cart and checkout functionality.',
    github: 'https://github.com/username/ecommerce',
    demo: 'https://ecommerce.example.com',
  },
  {
    id: 3,
    name: 'Task Manager',
    image: 'https://source.unsplash.com/random/400x300?task',
    tech: ['React', 'Express', 'PostgreSQL'],
    description: 'An app to manage daily tasks with deadlines.',
    github: 'https://github.com/username/taskmanager',
    demo: 'https://taskmanager.example.com',
  },
  {
    id: 4,
    name: 'Blog Platform',
    image: 'https://source.unsplash.com/random/400x300?blog',
    tech: ['React', 'Next.js', 'Firebase'],
    description: 'A simple blog platform with markdown support.',
    github: 'https://github.com/username/blog',
    demo: 'https://blog.example.com',
  },
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" align="center" gutterBottom>
        My Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <ProjectCard project={project} onViewMore={setSelectedProject} />
          </Grid>
        ))}
      </Grid>

      <ProjectModal
        open={!!selectedProject}
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </Container>
  );
};

export default ProjectsSection;
