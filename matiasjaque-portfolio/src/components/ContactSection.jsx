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
    <Box id="contact" sx={{ py: { xs: 2, md: 3 }, px: 2, textAlign: 'center' }}>
      <Typography
        variant="h3"
        align="center"
        fontWeight="bold"
        marginBottom={2}
        sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }}
      >
        Contáctame
      </Typography>
      <Typography
        variant="body1"
        mb={1}
        maxWidth={'700px'}
        mx={'auto'}
        fontSize={{ xs: '0.95rem', md: '1rem' }}
      >
        Si deseas contactarme por oportunidades laborales, colaboraciones o
        proyectos, aquí encontrarás mis datos de contacto y enlaces relevantes.
      </Typography>

      <Typography variant="h6" fontWeight="medium" mt={2} mb={0.5}>
        Redes y Contacto
      </Typography>

      <Stack
        direction="row"
        spacing={3}
        justifyContent="center"
        flexWrap="wrap"
        gap={1}
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
            Github
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
            Linkedin
          </Link>
        </Stack>

        <Button
          variant="contained"
          color="primary"
          startIcon={<Download />}
          href="/dummy-cv.pdf"
          download
          sx={{
            py: 1,
            px: 1.5,
            fontSize: { xs: '0.8rem', md: '0.8rem' },
          }}
        >
          Descargar CV
        </Button>
      </Stack>
    </Box>
  );
};

export default ContactSection;
