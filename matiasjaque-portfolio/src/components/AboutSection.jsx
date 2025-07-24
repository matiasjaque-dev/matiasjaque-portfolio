import {
  Box,
  Typography,
  Stack,
  Chip,
  Avatar,
  Switch,
  Fade,
  useTheme,
  Divider,
} from '@mui/material';
import React, { useState } from 'react';

const AboutSection = () => {
  const theme = useTheme();

  const aboutData = {
    professional: {
      photo: '/matias-jaque-professional.webp',
      description:
        'Soy Matías Jaque, desarrollador Front-End con experiencia en diversas tecnologías. Me gusta aprender continuamente mientras trabajo en distintos proyectos, integrando diferentes herramientas y enfoques, buscando siempre dar lo mejor de mí para crecer tanto en habilidades técnicas como en aspectos personales.',
      skills: [
        'React',
        'JavaScript',
        'Zustand',
        'MUI',
        'Node.js',
        'Tailwind CSS',
        'Firebase',
        'MySQL',
        'REST APIs',
      ],
    },
    personal: {
      photo: '/image.png',
      description:
        'Tengo 24 años y dos años de experiencia laboral. Me considero una persona esforzada y con ambiciones de llegar lejos, lo que me motiva a dar siempre lo mejor de mí y crecer de forma constante. Busco mantenerme activo y equilibrar mi tiempo entre aprender, hacer deporte y disfrutar de mis hobbies. Valoro mantener una actitud positiva y rodearme de buenas experiencias.',
      skills: [
        'Teclado',
        'PlayStation',
        'Leer',
        'GYM',
        'Estudiar',
        'Ingles',
        'Futbol',
      ],
    },
  };

  const [isProfessional, setIsProfessional] = useState(true);

  const handleToggle = () => setIsProfessional(!isProfessional);

  const currentData = isProfessional
    ? aboutData.professional
    : aboutData.personal;

  return (
    <Box sx={{ backgroundColor: '#F5F8FA', borderRadius: 2, py: 2 }}>
      <Box
        id="about"
        sx={{
          px: 2,
          maxWidth: '800px',
          mx: 'auto',
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h3"
          align="center"
          fontWeight="bold"
          marginBottom={2}
          sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }}
        >
          Acerca de Mi
        </Typography>

        <Typography variant="subtitle1" color="text.secondary" mb={2}>
          Conoce más sobre quién soy, tanto en lo profesional como en lo
          personal.
        </Typography>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mb: 2,
          }}
        >
          <Typography
            variant="body1"
            sx={{
              px: 1,
              borderRadius: 3,
              ...(isProfessional
                ? {}
                : {
                    backgroundColor: theme.palette.primary.main,
                    color: 'white',
                    fontWeight: 'bold',
                  }),
            }}
          >
            Personal
          </Typography>
          <Switch
            checked={isProfessional}
            onChange={handleToggle}
            color="primary"
          />
          <Typography
            variant="body1"
            sx={{
              px: 1,
              borderRadius: 3,
              ...(isProfessional
                ? {
                    backgroundColor: theme.palette.primary.main,
                    color: 'white',
                    fontWeight: 'bold',
                  }
                : {}),
            }}
          >
            Profesional
          </Typography>
        </Box>

        <Fade in={true} timeout={500}>
          <Box
            key={isProfessional ? 'pro' : 'per'}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
              px: 2,
            }}
          >
            <Avatar
              alt={
                isProfessional
                  ? 'Foto profesional de Matías Jaque'
                  : 'Foto personal de Matías Jaque'
              }
              src={currentData.photo}
              sx={{
                objectFit: 'cover',
                objectPosition: 'center',
                width: { xs: '190px', sm: '230px', md: '290px' },
                height: { xs: '205px', sm: '245px', md: '315px' },
                borderRadius: '50%',
                boxShadow: 3,
              }}
            />
            <Typography
              variant="body1"
              sx={{
                maxWidth: '650px',
                textAlign: 'center',
                lineHeight: 1.6,
              }}
            >
              {currentData.description}
            </Typography>
            <Divider
              sx={{ width: '120px', borderColor: theme.palette.primary.main }}
            />

            <Stack
              direction="row"
              spacing={1}
              flexWrap="wrap"
              justifyContent="center"
              rowGap={1}
            >
              {currentData.skills.map((skill, index) => (
                <Chip
                  key={index}
                  label={skill}
                  color="primary"
                  variant="outlined"
                  sx={{ fontSize: '0.85rem', mb: '4px' }}
                />
              ))}
            </Stack>
          </Box>
        </Fade>
      </Box>
    </Box>
  );
};

export default AboutSection;
