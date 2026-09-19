import React from 'react';
import Grid from '@mui/material/Grid';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';
import { ui } from '../data/ui';
import { useLocale } from '../context/LocaleContext';
import SectionHeading, { Section } from './SectionHeading';

const ProjectsSection = () => {
  const { t } = useLocale();

  return (
    <Section id="projects">
      <SectionHeading
        id="projects"
        title={t(ui.projects.title)}
        subtitle={t(ui.projects.subtitle)}
      />
      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid key={project.id} size={{ xs: 12, md: 6 }}>
            <ProjectCard project={project} priority={index === 0} />
          </Grid>
        ))}
      </Grid>
    </Section>
  );
};

export default ProjectsSection;
