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
];