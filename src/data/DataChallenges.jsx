import { 
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome';

import {
  faSquareJs,
  faGithub,
  faReact,
  faNode,
} from '@fortawesome/free-brands-svg-icons';

import {
  faGlobe
} from '@fortawesome/free-solid-svg-icons';

export const icons = [
  {
    name: 'JavaScript',
    icon: <FontAwesomeIcon icon={faSquareJs} />,
    style: 'hover:text-yellow-500'
  },
  {
    name: 'ReactJS',
    icon: <FontAwesomeIcon icon={faReact} />,
    style: 'hover:text-cyan-300'
  },
  {
    name: 'ExpressJS',
    icon: <FontAwesomeIcon icon={faNode} />,
    style: 'hover:text-green-500'
  }
];

export const challengesArray = [
  { 
    title: 'Mi Sitio Web',
    alt:'React logo',    
    img: 'https://res.cloudinary.com/dqjnzfsp6/image/upload/my-page24/logo-react.png',    
    hrefTitle: '/',
    iconTitle: <FontAwesomeIcon icon={faGlobe} />,
    hrefGithub: 'https://github.com/jjwernerm/my-page24',
    iconGithub: <FontAwesomeIcon icon={faGithub} />,
  },
  { 
    title: 'Validar Campos',
    alt:'JavaScript logo',    
    img: 'https://res.cloudinary.com/dqjnzfsp6/image/upload/my-page24/logo-javascript.png',    
    hrefTitle: 'https://aquamarine-truffle-dcc5e2.netlify.app/',
    iconTitle: <FontAwesomeIcon icon={faGlobe} />,
    hrefGithub: 'https://github.com/jjwernerm/validarCampos',
    iconGithub: <FontAwesomeIcon icon={faGithub} />,
  },
  { 
    title: 'Carrito de Compras',
    alt:'JavaScript logo',    
    img: 'https://res.cloudinary.com/dqjnzfsp6/image/upload/my-page24/logo-javascript.png',    
    hrefTitle: 'https://precious-cheesecake-93e196.netlify.app/',
    iconTitle: <FontAwesomeIcon icon={faGlobe} />,
    hrefGithub: 'https://github.com/jjwernerm/carritoCompras',
    iconGithub: <FontAwesomeIcon icon={faGithub} />,
  },
  { 
    title: 'Filtrar Búsqueda',
    alt:'JavaScript logo',    
    img: 'https://res.cloudinary.com/dqjnzfsp6/image/upload/my-page24/logo-javascript.png',    
    hrefTitle: 'https://beautiful-pasca-e64be4.netlify.app/',
    iconTitle: <FontAwesomeIcon icon={faGlobe} />,
    hrefGithub: 'https://github.com/jjwernerm/filtrarBusqueda',
    iconGithub: <FontAwesomeIcon icon={faGithub} />,
  },
  { 
    title: 'Registro de Invitados (usando Class)',
    alt:'JavaScript logo',    
    img: 'https://res.cloudinary.com/dqjnzfsp6/image/upload/my-page24/logo-javascript.png',    
    hrefTitle: 'https://subtle-biscuit-28f7b2.netlify.app/',
    iconTitle: <FontAwesomeIcon icon={faGlobe} />,
    hrefGithub: 'https://github.com/jjwernerm/invitadosClass',
    iconGithub: <FontAwesomeIcon icon={faGithub} />,
  },
  { 
    title: 'Aplicando Clases (Práctico)',
    alt:'JavaScript logo',    
    img: 'https://res.cloudinary.com/dqjnzfsp6/image/upload/my-page24/logo-javascript.png',    
    hrefTitle: 'https://rad-basbousa-7b3921.netlify.app/',
    iconTitle: <FontAwesomeIcon icon={faGlobe} />,
    hrefGithub: 'https://github.com/jjwernerm/practiceClass',
    iconGithub: <FontAwesomeIcon icon={faGithub} />,
  },
  { 
    title: 'Props',
    alt:'React logo',    
    img: 'https://res.cloudinary.com/dqjnzfsp6/image/upload/my-page24/logo-react.png',    
    hrefTitle: 'https://heartfelt-crepe-a64641.netlify.app/',
    iconTitle: <FontAwesomeIcon icon={faGlobe} />,
    hrefGithub: 'https://github.com/jjwernerm/props',
    iconGithub: <FontAwesomeIcon icon={faGithub} />,
  },
  { 
    title: 'useState',
    alt:'React logo',    
    img: 'https://res.cloudinary.com/dqjnzfsp6/image/upload/my-page24/logo-react.png',    
    hrefTitle: 'https://resilient-licorice-9c195b.netlify.app/',
    iconTitle: <FontAwesomeIcon icon={faGlobe} />,
    hrefGithub: 'https://github.com/jjwernerm/useState',
    iconGithub: <FontAwesomeIcon icon={faGithub} />,
  },
  { 
    title: 'Renderización',
    alt:'React logo',    
    img: 'https://res.cloudinary.com/dqjnzfsp6/image/upload/my-page24/logo-react.png',    
    hrefTitle: 'https://spontaneous-blancmange-373bfa.netlify.app/',
    iconTitle: <FontAwesomeIcon icon={faGlobe} />,
    hrefGithub: 'https://github.com/jjwernerm/render',
    iconGithub: <FontAwesomeIcon icon={faGithub} />,
  },
  { 
    title: 'useEffect',
    alt:'React logo',    
    img: 'https://res.cloudinary.com/dqjnzfsp6/image/upload/my-page24/logo-react.png',    
    hrefTitle: 'https://classy-treacle-fc3c5a.netlify.app/',
    iconTitle: <FontAwesomeIcon icon={faGlobe} />,
    hrefGithub: 'https://github.com/jjwernerm/useEffect',
    iconGithub: <FontAwesomeIcon icon={faGithub} />,
  },
  { 
    title: 'Router',
    alt:'React logo',    
    img: 'https://res.cloudinary.com/dqjnzfsp6/image/upload/my-page24/logo-react.png',    
    hrefTitle: 'https://bright-kelpie-ab179a.netlify.app/',
    iconTitle: <FontAwesomeIcon icon={faGlobe} />,
    hrefGithub: 'https://github.com/jjwernerm/router',
    iconGithub: <FontAwesomeIcon icon={faGithub} />,
  },
  { 
    title: 'Context',
    alt:'React logo',    
    img: 'https://res.cloudinary.com/dqjnzfsp6/image/upload/my-page24/logo-react.png',    
    hrefTitle: 'https://chimerical-paprenjak-8d38ee.netlify.app/',
    iconTitle: <FontAwesomeIcon icon={faGlobe} />,
    hrefGithub: 'https://github.com/jjwernerm/context',
    iconGithub: <FontAwesomeIcon icon={faGithub} />,
  },
  { 
    title: 'Manejando Alerta con prop',
    alt:'React logo',    
    img: 'https://res.cloudinary.com/dqjnzfsp6/image/upload/my-page24/logo-react.png',    
    hrefTitle: 'https://calm-lamington-f3a3f6.netlify.app/',
    iconTitle: <FontAwesomeIcon icon={faGlobe} />,
    hrefGithub: 'https://github.com/jjwernerm/alerts',
    iconGithub: <FontAwesomeIcon icon={faGithub} />,
  },
];