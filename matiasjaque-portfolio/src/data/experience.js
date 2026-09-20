export const experience = [
  {
    id: 'maintdata',
    company: 'MaintData',
    role: {
      en: 'Full-Stack Developer',
      es: 'Desarrollador Full Stack',
    },
    period: {
      en: 'Aug 2024 – Present',
      es: 'Ago 2024 – Presente',
    },
    location: {
      en: 'Chile',
      es: 'Chile',
    },
    stack: ['React.js', 'Vue.js', 'Redux', 'Node.js', 'Firebase', 'Firestore'],
    highlights: {
      en: [
        'Autonomously led development of new modules and continuous improvement of a SaaS inventory and stock platform, making technical and architectural decisions without direct supervision.',
        'Reduced critical page load time from 14 seconds to 5 seconds (60% improvement) after scaling from 500 to 13,000 inventory records in production.',
        'Designed and built a digital vehicle checklist module from scratch, automating work-order generation and traffic-light failure logic; deployed for 45 active clients.',
        'Designed a bulk data upload module supporting 15+ Excel file types, eliminating manual data entry and reducing client operational hours.',
        'Refactored legacy code and improved modular front-end architecture using Vue.js and Redux; integrated Firebase HTTP functions and Firestore.',
        'Reviewed code daily for quality and maintainability, including AI-generated code, applying Smart/Dumb component separation and custom hooks.',
      ],
      es: [
        'Diseñé y desarrollé nuevos módulos para un software SaaS de inventario y stock, manteniéndolo de forma individual para un portafolio de 13 clientes activos.',
        'Reduje el tiempo de carga de la vista de repuestos de 14 a 5 segundos (−60 %), permitiendo soportar 13.000 registros en producción tras refactorizar la arquitectura del módulo.',
        'Reduje un módulo de subidas masivas de 20 a 3 archivos, bajando el tiempo de actualización de 4 horas a un máximo de 1 hora.',
        'Diseñé una estrategia híbrida de filtrado en Firestore que evitó crear 255 índices compuestos y redujo la complejidad del código.',
        'Refactoricé código legacy y mejoré la arquitectura modular del front-end; integré funciones HTTP con Firebase y consumí Firestore.',
        'Implementé Redux para la gestión de estado, separando la lógica de la presentación, y participé en decisiones técnicas y planificación de sprints junto a la jefatura.',
      ],
    },
  },
  {
    id: 'usach',
    company: {
      en: 'Universidad de Santiago de Chile (USACH)',
      es: 'Universidad de Santiago de Chile (USACH)',
    },
    role: {
      en: 'Analyst Developer',
      es: 'Analista Desarrollador',
    },
    period: {
      en: 'Jul 2023 – Aug 2024',
      es: 'Jul 2023 – Ago 2024',
    },
    location: {
      en: 'Chile',
      es: 'Chile',
    },
    stack: ['Laravel', 'Oracle', 'Java', 'Vue.js', 'Go'],
    highlights: {
      en: [
        'Designed and developed a module using Laravel and Oracle for managing faculty teaching hours.',
        'Implemented a two-factor authentication (2FA) system with Java, integrating it with existing institutional systems.',
        'Participated in migrating legacy software to the web, using Vue.js for the front end and Go for the back end.',
      ],
      es: [
        'Desarrollé un módulo con Laravel y Oracle para la gestión de horas docentes.',
        'Implementé un sistema de autenticación de doble factor (2FA) con Java, conectándolo a los sistemas existentes de la institución.',
        'Participé en la migración de software legacy a plataformas web, utilizando Vue.js en el front-end y Go en el back-end.',
      ],
    },
  },
];
