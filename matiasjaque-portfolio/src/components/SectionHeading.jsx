import React from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Typography } from '@mui/material';

const SectionHeading = ({ id, title, subtitle }) => (
  <Box sx={{ mb: { xs: 3, md: 4 }, textAlign: 'center' }}>
    <Typography
      id={`${id}-heading`}
      component="h2"
      variant="h4"
      fontWeight={700}
      sx={{ fontSize: { xs: '1.75rem', md: '2.125rem' } }}
    >
      {title}
    </Typography>
    {subtitle ? (
      <Typography
        component="p"
        variant="body1"
        color="text.secondary"
        sx={{ mt: 1, mx: 'auto', maxWidth: 640 }}
      >
        {subtitle}
      </Typography>
    ) : null}
  </Box>
);

SectionHeading.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export function Section({ id, children, bgcolor }) {
  return (
    <Box
      component="section"
      id={id}
      aria-labelledby={`${id}-heading`}
      sx={{
        py: { xs: 6, md: 8 },
        scrollMarginTop: 80,
        bgcolor: bgcolor || 'transparent',
      }}
    >
      <Container>{children}</Container>
    </Box>
  );
}

Section.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  bgcolor: PropTypes.string,
};

export default SectionHeading;
