import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome';

import {
  faLinkedin,
  faGithub
} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {

  return (
    <>

      <div className='h-footer flex flex-col items-center justify-center text-white text-center text-sm md:text-base'>
        <img
          alt="My Logo"
          src="https://res.cloudinary.com/dqjnzfsp6/image/upload/my-page24/logo.svg"
          className="h-16 w-16"
        />
        <div className='flex text-2xl'>
          <a
            className="mr-2 px-1 cursor-pointer rounded hover:text-blue-600 hover:bg-white
            transition ease-in-out delay-150 duration-500 hover:-translate-y-1 hover:scale-110"
            href='https://www.linkedin.com/in/joannywerner/'
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            className="mr-2 px-1 cursor-pointer rounded hover:text-black hover:bg-white
            transition ease-in-out delay-150 duration-500 hover:-translate-y-1 hover:scale-110"
            href='https://github.com/jjwernerm'
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        <p>Copyright © reserved, Template by joannywerner.com</p>
      </div>

    </>
  );
};