import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React from 'react';
import PropTypes from 'prop-types';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { GitHub, OpenInNew } from '@mui/icons-material';

const ProjectCard = ({ project }) => {
  return (
    <Card
      sx={{
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': { transform: 'translateY(-4px)', boxShadow: 6 },
        height: '100%', // Para que ocupe toda la celda del Grid
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: 550,
        width: '100%',
      }}
    >
      <CardMedia
        component="img"
        image={project.image}
        alt={project.name}
        sx={{
          aspectRatio: { xs: '4/3', md: '16/9' },
          maxHeight: { xs: 150, md: 190 },
          width: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          borderTopLeftRadius: 4,
          borderTopRightRadius: 4,
        }}
      />

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" gutterBottom fontWeight={'bold'}>
          {project.name}
        </Typography>
        <Stack direction={'row'} spacing={1} mb={1} flexWrap={'wrap'}>
          {project.tech.map((tech) => (
            <Chip key={tech} label={tech} size="small" color="primary" />
          ))}
        </Stack>
        <Typography variant="body2" color="text.secondary">
          {project.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between' }}>
        {project.github && project.github !== '#' ? (
          <Button
            size="small"
            variant="outlined"
            href={project.github}
            target="_blank"
            rel="noopener"
            startIcon={<GitHub />}
          >
            GitHub
          </Button>
        ) : (
          <Button size="small" variant="outlined" disabled startIcon={<GitHub />}>
            GitHub
          </Button>
        )}

        {project.demo && project.demo !== '#' ? (
          <Button
            size="small"
            variant="contained"
            href={project.demo}
            target="_blank"
            rel="noopener"
            endIcon={<OpenInNew />}
          >
            Visitar Sitio
          </Button>
        ) : (
          <Button size="small" variant="contained" disabled endIcon={<OpenInNew />}>
            Visitar Sitio
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    demo: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    tech: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  onViewMore: PropTypes.func,
};

export default ProjectCard;
