import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Typography,
} from '@mui/material';
import { GitHub, OpenInNew } from '@mui/icons-material';
import { ui } from '../data/ui';
import { useLocale } from '../context/LocaleContext';

const ProjectCard = ({ project }) => {
  const { t } = useLocale();
  const liveHref = project.links.live;
  const videoHref = project.links.video;
  const demoHref = liveHref || videoHref;
  const demoLabel = liveHref ? t(ui.project.live) : t(ui.project.video);

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': { transform: 'translateY(-4px)', boxShadow: 6 },
      }}
    >
      <CardMedia
        component="img"
        image={project.image}
        alt={t(project.title)}
        sx={{
          aspectRatio: '16 / 9',
          width: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography component="h3" variant="h6" fontWeight={700} gutterBottom>
          {t(project.title)}
        </Typography>
        <Stack direction="row" flexWrap="wrap" useFlexGap spacing={1} sx={{ mb: 1.5 }}>
          {project.stack.map((tech) => (
            <Chip key={tech} label={tech} size="small" color="primary" />
          ))}
        </Stack>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          {t(project.summary)}
        </Typography>
        <Stack component="ul" spacing={0.5} sx={{ m: 0, pl: 2 }}>
          {t(project.highlights).map((item) => (
            <Typography key={item} component="li" variant="body2" color="text.secondary">
              {item}
            </Typography>
          ))}
        </Stack>
      </CardContent>
      <CardActions sx={{ px: 2, pb: 2, pt: 0, justifyContent: 'space-between' }}>
        <Button
          size="small"
          variant="outlined"
          href={project.links.github}
          target="_blank"
          rel="noopener noreferrer"
          startIcon={<GitHub />}
        >
          {t(ui.project.github)}
        </Button>
        {demoHref ? (
          <Button
            size="small"
            variant="contained"
            href={demoHref}
            target="_blank"
            rel="noopener noreferrer"
            endIcon={<OpenInNew />}
          >
            {demoLabel}
          </Button>
        ) : null}
      </CardActions>
    </Card>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.object.isRequired,
    summary: PropTypes.object.isRequired,
    highlights: PropTypes.object.isRequired,
    stack: PropTypes.arrayOf(PropTypes.string).isRequired,
    links: PropTypes.shape({
      github: PropTypes.string.isRequired,
      live: PropTypes.string,
      video: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default ProjectCard;
