import patientManagement from '../assets/managment-psychology.webp';
import realtimeChat from '../assets/realTimeChatDiagram.webp';
import ecommerceStore from '../assets/e-commerce_store_react.webp';

export const projects = [
  {
    id: 'patient-management',
    image: patientManagement,
    imagePosition: 'top',
    imageAlt: {
      en: 'Login screen of the patient management platform',
      es: 'Pantalla de inicio de sesión de la plataforma de gestión de pacientes',
    },
    stack: ['React', 'TypeScript', 'Material UI', 'Node.js', 'MongoDB', 'JWT'],
    links: {
      github: 'https://github.com/matiasjaque-dev/managment-psychology-app',
      live: 'https://managment-psychology-app.vercel.app/',
    },
    title: {
      en: 'Patient management platform',
      es: 'Sistema de gestión de pacientes',
    },
    summary: {
      en: 'Clinical web platform where patients book appointments, psychologists manage their caseload, and admins oversee the system.',
      es: 'Plataforma clínica donde los pacientes agendan citas, los psicólogos gestionan sus pacientes y los administradores supervisan el sistema.',
    },
    highlights: {
      en: [
        'Role-based authentication for patients, psychologists, and admins',
        'Dashboard workflows for scheduling and patient follow-up',
        'REST API with Node.js, MongoDB, and JWT',
      ],
      es: [
        'Autenticación por roles para pacientes, psicólogos y administradores',
        'Flujos de panel para agendamiento y seguimiento de pacientes',
        'API REST con Node.js, MongoDB y JWT',
      ],
    },
  },
  {
    id: 'realtime-chat',
    image: realtimeChat,
    imagePosition: 'center',
    imageAlt: {
      en: 'Architecture diagram of the distributed real-time chat system',
      es: 'Diagrama de arquitectura del sistema de chat en tiempo real',
    },
    stack: ['Node.js', 'Socket.io', 'Redis', 'MongoDB', 'Docker', 'Express', 'JWT'],
    links: {
      github: 'https://github.com/matiasjaque-dev/real-time-chat',
      video: 'https://www.loom.com/share/ce025d0f321e47819cbb2e6c1b6b687b',
    },
    title: {
      en: 'Distributed real-time messaging',
      es: 'Mensajería distribuida en tiempo real',
    },
    summary: {
      en: 'Scalable chat backend designed for horizontal scaling with WebSockets and Redis pub/sub across multiple API instances.',
      es: 'Backend de chat escalable, pensado para crecimiento horizontal con WebSockets y Redis pub/sub entre varias instancias.',
    },
    highlights: {
      en: [
        'Bidirectional messaging with Socket.io',
        'Redis pub/sub to coordinate messages between backend instances',
        'MongoDB persistence and Dockerized services',
      ],
      es: [
        'Mensajería bidireccional con Socket.io',
        'Redis pub/sub para coordinar mensajes entre instancias',
        'Persistencia en MongoDB y servicios en Docker',
      ],
    },
  },
  {
    id: 'ecommerce-store',
    image: ecommerceStore,
    imagePosition: 'top',
    imageAlt: {
      en: 'Product catalog of the e-commerce storefront',
      es: 'Catálogo de productos de la tienda e-commerce',
    },
    stack: ['React', 'Vite', 'Zustand', 'Tailwind CSS', 'Firestore'],
    links: {
      github: 'https://github.com/matiasjaque-dev/eccomerce-store-react',
      live: 'https://eccomerce-store-react-yo2h.vercel.app/',
    },
    title: {
      en: 'E-commerce store',
      es: 'Tienda e-commerce',
    },
    summary: {
      en: 'Online store with cart and stock flows, using Firestore for persistence and Zustand for global client state.',
      es: 'Tienda en línea con carrito y stock, usando Firestore para persistencia y Zustand para el estado global.',
    },
    highlights: {
      en: [
        'Cart and inventory updates backed by Firestore',
        'Global UI state with Zustand',
        'Responsive storefront built with React, Vite, and Tailwind CSS',
      ],
      es: [
        'Carrito y stock persistidos en Firestore',
        'Estado global de UI con Zustand',
        'Vitrina responsive con React, Vite y Tailwind CSS',
      ],
    },
  },
];
