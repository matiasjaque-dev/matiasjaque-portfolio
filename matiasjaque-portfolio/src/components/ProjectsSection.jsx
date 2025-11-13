import ProjectCard from './ProjectCard';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import React from 'react';
import Grid from '@mui/material/Grid';
import { Fade } from '@mui/material';
import ecommerceStorage from '../assets/e-commerce_store_react.png';
import managmentPsychology from '../assets/managment-psychology.jpeg';

// src/data/projects.js
const projects = [
  {
    id: 1,
    name: 'E-commerce Store',
    image: ecommerceStorage,
    tech: ['React', 'Vite', 'Zustand', 'Tailwind', 'Firestore'],
    description:
      'Tienda en línea realizada con React, Zustand y Tailwind, con gestión de carrito y stock usando Firestore para reforzar flujo de e-commerce y estado global.',
    github: 'https://github.com/matiasjaque-dev/eccomerce-store-react',
    demo: 'https://eccomerce-store-react-yo2h.vercel.app/',
  },
  {
    id: 2,
    name: 'Sistema de Gestión de Pacientes',
    image: managmentPsychology,
    tech: ['React', 'TypeScript', 'Material-UI', 'Node.js', 'MongoDB', 'JWT'],
    description:
      'Plataforma web para gestión clínica que permite a usuarios agendar citas, psicólogos gestionar sus pacientes y administradores supervisar el sistema completo. Incluye autenticación con roles, panel de control y API REST.',
    github: 'https://github.com/matiasjaque-dev/managment-psychology-app',
    demo: 'https://managment-psychology-app.vercel.app/',
  },
];

const ProjectsSection = () => {
  return (
    <Fade in timeout={800}>
      <Container sx={{ py: { xs: 3, md: 4 } }} id="project">
        <Typography
          variant="h3"
          align="center"
          fontWeight="bold"
          marginBottom={2}
          sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }}
        >
          Mis Proyectos
        </Typography>

        <Grid container spacing={4} display={'flex'} justifyContent={'center'}>
          {projects.map((project) => (
            <Grid item xs={12} sm={6} md={6} key={project.id}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Fade>
  );
};

export default ProjectsSection;
