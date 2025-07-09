import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React from 'react';
import PropTypes from 'prop-types';

const ProjectModal = ({ open, project, onClose }) => {
  if (!project) return null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>{project.name}</DialogTitle>
      <DialogContent dividers>
        <Typography variant="subtitle1" gutterBottom>
          {project.description}
        </Typography>
        <Stack direction="row" spacing={1} mb={2}>
          {project.tech.map((tech) => (
            <Chip key={tech} label={tech} />
          ))}
        </Stack>
        <img
          src={project.image}
          alt={project.name}
          style={{ width: '100%', borderRadius: 8 }}
        />
      </DialogContent>
      <DialogActions>
        <Button
          href={project.github}
          target="_blank"
          rel="noopener"
          variant="outlined"
        >
          GitHub
        </Button>
        <Button
          href={project.demo}
          target="_blank"
          rel="noopener"
          variant="contained"
        >
          Visit Site
        </Button>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

ProjectModal.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tech: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
    demo: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
  }).isRequired,
  open: PropTypes.func,
  onClose: PropTypes.func,
};

export default ProjectModal;
