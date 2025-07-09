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

const ProjectCard = ({ project, onViewMore }) => {
  return (
    <Card
      sx={{
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': { transform: 'translateY(-4px)', boxShadow: 6 },
      }}
    >
      <CardMedia
        component="img"
        height="160"
        image={project.image}
        alt={project.name}
      />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {project.name}
        </Typography>
        <Stack direction={'row'} spacing={1} mb={1} flexWrap={'wrap'}>
          {project.tech.map((tech) => (
            <Chip key={tech} label={tech} size="small" />
          ))}
        </Stack>
        <Typography variant="body2" color="text.secondary">
          {project.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => onViewMore(project)}>
          View More
        </Button>
      </CardActions>
    </Card>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tech: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  onViewMore: PropTypes.func,
};

export default ProjectCard;
