import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome';

import {
  faHouseChimney,
  faUser,
  faGraduationCap,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

import {
  faSheetPlastic
} from '@fortawesome/free-solid-svg-icons';

import {
  faLinkedin,
  faGithub
} from '@fortawesome/free-brands-svg-icons';

export const navigation = [
  {
    name: 'Inicio',
    href: '/',
    icon: <FontAwesomeIcon icon={faHouseChimney} />
  },
  {
    name: 'Joa',
    href: '/Joa',
    icon: <FontAwesomeIcon icon={faUser} />
  },
  {
    name: 'Challenges',
    href: '/Challenges',
    icon: <FontAwesomeIcon icon={faGraduationCap} />
  },
  {
    name: 'Contacto',
    href: '/Contact',
    icon: <FontAwesomeIcon icon={faEnvelope} />
  },
];

export const user = {
  name: 'Joanny Werner',
  email: 'joannywerner@gmail.com',
  imageUrl: 'https://res.cloudinary.com/dqjnzfsp6/image/upload/my-page24/my-photo.png',
};

export const userNavigation = [
  {
    name: 'Linkedin',
    href: 'https://www.linkedin.com/in/joannywerner/',
    icon: <FontAwesomeIcon icon={faLinkedin} />
  },
  {
    name: 'Github',
    href: 'https://github.com/jjwernerm',
    icon: <FontAwesomeIcon icon={faGithub} />
  },
  {
    name: 'Descargar CV',
    href: 'https://drive.google.com/file/d/1D6LUxy6Jf_bU7ZhK62MqDn_HrATOVz3m/view?usp=sharing',
    icon: <FontAwesomeIcon icon={faSheetPlastic} />
  },
];