import {
  Box,
  Typography,
  Stack,
  Chip,
  Avatar,
  Switch,
  Fade,
} from '@mui/material';
import React, { useState } from 'react';

const AboutSection = () => {
  const aboutData = {
    professional: {
      photo: '/dummy-professional.jpg',
      description:
        'Mi nombre es Matías Jaque y me apasiona el desarrollo Front-End. ' +
        'He trabajado con tecnologías como JavaScript, React.js, Zustand y Material UI, y también tengo experiencia en el desarrollo Back-End utilizando Node.js. ' +
        'En bases de datos, he trabajado con Firestore, MySQL, PostgreSQL y Oracle. ' +
        'Me considero una persona con alta disposición para aprender de forma continua y con responsabilidad, ' +
        'buscando siempre dar lo mejor de mí para crecer tanto en habilidades técnicas como en aspectos personales, como el aprendizaje de inglés y el trabajo en equipo.',
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
      photo: '/dummy-personal.jpg',
      description:
        'Tengo 24 años y cuento con dos años de experiencia laboral. Me considero una persona esforzada y con ambiciones de llegar lejos, ' +
        'lo que me motiva día a día a dar lo mejor de mí y crecer continuamente como persona. Disfruto mantenerme activo haciendo deporte y yendo al gimnasio, ' +
        'además de equilibrar mi tiempo entre el trabajo y el estudio autodidacta. ' +
        'En mis tiempos libres me gusta tocar teclado, jugar PlayStation y leer. En general, valoro mantener una actitud positiva y disfrutar de cada etapa de la vida, ' +
        'buscando aprender constantemente y rodearme de buenas experiencias.',
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
    <Box
      id="about"
      sx={{ py: 8, px: 2, maxWidth: '800px', mx: 'auto', textAlign: 'center' }}
    >
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        About Me
      </Typography>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mb: 2,
        }}
      >
        <Typography variant="body1">Personal</Typography>
        <Switch
          checked={isProfessional}
          onChange={handleToggle}
          color="primary"
        />
        <Typography variant="body1">Professional</Typography>
      </Box>

      <Fade in={true} timeout={400}>
        <Box
          key={isProfessional ? 'pro' : 'per'}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Avatar
            alt={isProfessional ? 'Professional photo' : 'Personal photo'}
            src={currentData.photo}
            sx={{ width: 150, height: 150 }}
          />
          <Typography variant="body1" sx={{ maxWidth: '600px' }}>
            {currentData.description}
          </Typography>
          <Stack
            direction="row"
            spacing={1}
            flexWrap="wrap"
            justifyContent="center"
          >
            {currentData.skills.map((skill, index) => (
              <Chip key={index} label={skill} color="primary" />
            ))}
          </Stack>
        </Box>
      </Fade>
    </Box>
  );
};

export default AboutSection;
