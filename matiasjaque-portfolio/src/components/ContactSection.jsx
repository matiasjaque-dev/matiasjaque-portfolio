import React from 'react';
import {
  Box,
  Typography,
  Stack,
  IconButton,
  Button,
  Link,
} from '@mui/material';
import { GitHub, LinkedIn, Email, Phone, Download } from '@mui/icons-material';

const ContactSection = () => {
  return (
    <Box id="contact" sx={{ py: 8, px: 2, textAlign: 'center' }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Contáctame
      </Typography>
      <Typography variant="body1" mb={4} maxWidth={'700px'} mx={'auto'}>
        En caso de que desees contactarme por oportunidades laborales,
        colaboraciones, proyectos o para conocer más sobre mi trabajo, aquí
        encontrarás mis datos de contacto y enlaces relevantes.
      </Typography>

      <Stack
        direction="row"
        spacing={3}
        justifyContent="center"
        flexWrap="wrap"
      >
        <Stack direction="row" alignItems="center">
          <IconButton
            color="primary"
            href="mailto:matias.jaque.dev@gmail.com"
            aria-label="Enviar correo"
          >
            <Email />
          </IconButton>
          <Typography variant="body1">matias.jaque.dev@gmail.com</Typography>
        </Stack>

        <Stack direction="row" spacing={1} alignItems="center">
          <Phone color="primary" />
          <Typography variant="body1">+56 947370877</Typography>
        </Stack>

        <Stack direction="row" spacing={1} alignItems="center">
          <GitHub color="primary" />
          <Link
            href="https://github.com/matiasjaque-dev"
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
          >
            github.com/matiasjaque-dev
          </Link>
        </Stack>

        <Stack direction="row" spacing={1} alignItems="center">
          <LinkedIn color="primary" />
          <Link
            href="https://www.linkedin.com/in/matias-jaque-montecinos"
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
          >
            linkedin.com/in/matias-jaque-montecinos
          </Link>
        </Stack>

        <Button
          variant="contained"
          color="primary"
          startIcon={<Download />}
          href="/dummy-cv.pdf"
          download
          sx={{ mt: 2 }}
        >
          Descargar CV
        </Button>
      </Stack>
    </Box>
  );
};

export default ContactSection;
