import semillero from '../assets/Projects/Semillero.webp'
import fishseason from '../assets/Projects/FishSeason.webp'
import propmanager from '../assets/Projects/PropManager.webp'

const proyectos = [
  {
    id: 'Ubuntu',
    titulo: 'Ubuntu - Semillero de Quinto Impacto ',
    imagen: semillero,
    imagenAlt: 'Captura principal del proyecto Ubuntu',
    problema: 'Página web destinada a impulsar el crecimiento de microemprendimientos, brindándoles oportunidades de financiamiento y mayor visibilidad.',
    rol: 'Estuve como Desarrollador Frontend realizando los dashboards, formularios y la página principal.',
    tecnologias: ['React', 'Vite', 'MaterialUI', 'Axios', 'Google OAuth'],
    aprendizaje: 'El proyecto me ayudó a entrar en un entorno laboral más completo y cercano a lo real, con trabajo en equipo, uso de metodologías ágiles y control de errores.',
    links: [
      {
        'label': 'GitHub',
        'url': 'https://github.com/LeiFraz/Semillero-Ubuntu',
        'ariaLabel': 'Acceder al Repo de Github'
      }
    ]
  },
  {
    id: 'fishseason',
    titulo: 'FishSeason',
    imagen: fishseason,
    imagenAlt: 'Captura principal del proyecto FishSeason',
    problema: 'Creamos una plataforma con el objetivo de formar una comunidad de pescadores, donde pudieran compartir sus aventuras de pesca.',
    rol: 'Estuve como Desarrollador Backend realizando las funcionalidades principales, creación de los endpoints, creación de los modelos para la base de datos y la consistencia de los datos para entregarlos al forntend.',
    tecnologias: ['Node.js', 'Express', 'TypeScript', 'Sequelize', 'MySQL', 'ThunderCliente'],
    aprendizaje: 'El proyecto me ayudó a tener un acercamiento de lo que es trabajar con un equipo completo UX/UI, testers, Frontend, Backend y PM.',
    links: [
      {
        'label': 'GitHub',
        'url': 'https://github.com/xiriuxb/NoCountry_s15-08-n-node-react',
        'ariaLabel': 'Acceder al Repo de Github'
      },
      {
        'label': 'Deploy',
        'url': 'https://no-country-s15-08-n-node-react.vercel.app',
        'ariaLabel': 'Acceder al Deploy del proyecto'
      }
    ]
  },
  {
    id: 'propmanager',
    titulo: 'PropManager',
    imagen: propmanager,
    imagenAlt: 'Captura principal del proyecto PropManager',
    problema: 'Plataforma de ayuda en la gestión y optimización de propiedades inmobiliarias. Permite administrar reclamos, crear usuarios, contratos y asociarlos con un inquilino.',
    rol: 'Estuve como Desarrollador Backend realizando los middleware, autenticación, creación de los endpoints, creación de la base de datos, funcionalidades principales que eran listado de datos.',
    tecnologias: ['Node.js', 'Express', 'TypeScript', 'Sequelize', 'MySQL', 'ThunderCliente'],
    aprendizaje: 'El proyecto me ayudó a considerar las habilidades de cada integrante del equipo, tener en cuenta los tiempos del proyecto y el scope aproximado para un equipo pequeño.',
    links: [
      {
        'label': 'GitHub',
        'url': 'https://github.com/LeiFraz/PropManager',
        'ariaLabel': 'Acceder al Repo de Github'
      },
      {
        'label': 'Deploy',
        'url': 'https://prop-manager.vercel.app/auth/sign-in?callbackUrl=https%3A%2F%2Fprop-manager.vercel.app%2F',
        'ariaLabel': 'Acceder al Deploy del proyecto'
      }
    ]
  }
]

export default proyectos;
