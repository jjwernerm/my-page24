import { useContext, useEffect, useState } from 'react';

import SelectMenus from '../components/SelectMenus.jsx';

import { SelectTechnologyContext } from '../context/SelectTechnologyContext.jsx';

import {
  challengesArray
} from '../data/DataChallenges.jsx';

export default function Challenges() {

  const { selected } = useContext(SelectTechnologyContext);
  const [filtered, setFiltered] = useState(challengesArray);

  useEffect(() => {

    function filterRepositories() {

      const result = challengesArray.filter((repositorie) => repositorie.id === selected.id);

      setFiltered(result.length ? result : challengesArray);

    };

    filterRepositories();

  }, [selected]);

  return (

    <div className="text-white shadow-md shadow-gray-700 bg-gray-800 mx-8 rounded-b-lg pb-8">

      <div className="
        border-b border-gray-500 md:flex md:gap-2 md:items-center bg-gray-800
        mt-24 h-44 mx-8 p-4 rounded-t-lg
        fixed top-0 left-0 right-0">
        <div className='md:border-r md:border-gray-500 md:w-3/5'>
          <p
            className="text-lg xs:text-2xl sm:text-3xl md:text-4xl font-semibold"
            style={{ textShadow: '2px 2px 2px rgba(8, 145, 178, 1)' }}>
            Mis Repositorios
          </p>
          <p
            className="text-xs xs:text-sm sm:text-base">
            Aquí encontrarás una colección de proyectos y prácticas que he realizado para mejorar mis habilidades en diversas tecnologías.
          </p>
        </div>
        <div className='md:w-2/5'>
          <SelectMenus />
        </div>
      </div>

      {/* * * * block-1 * * * */}
      <div className="bg-gray-800 max-h-96 overflow-y-auto mt-64 py-4">

        {filtered.sort((a, b) => a.title.localeCompare(b.title)).map((item) => (

          <div
            className='grid grid-cols-2 gap-2 m-2 sm:hidden'
            key={item.title}>

            {/* * * * div-1 * * * */}
            <div>
              <a
                href={item.web}
                target="_blank">
                <img
                  className='w-full h-full rounded-md'
                  href={item.web}
                  alt='Website image'
                  src={item.img}
                />
              </a>
            </div>

            {/* * * * div-2 * * * */}
            <div>
              <p className="text-cyan-600 font-semibold text-sm sm:text-base md:text-lg">{item.title}</p>
              <p className="text-xs sm:text-sm md:text-base"> Frontend {' '}
                <a
                  href={item.github}
                  target="_blank"
                  className="font-semibold underline underline-offset-2">
                  Github
                </a>
              </p>
              <div className={item.id != 3 ? 'hidden' : 'block'}>
                <p className="text-xs sm:text-sm md:text-base"> Backend {' '}
                  <a
                    href={item.backgithub}
                    target="_blank"
                    className="font-semibold underline underline-offset-2">
                    Github
                  </a>
                </p>
              </div>
              <p className="text-xs sm:text-sm md:text-base"> Ver sitio{' '}
                <a
                  href={item.web}
                  target="_blank"
                  className="font-semibold underline underline-offset-2">
                  Web
                </a>
              </p>
              <div>
                <p className="text-base xs:text-lg md:text-xl">
                  {item.faHtml5} {item.faCss3Alt} {item.faJsSquare} {item.faReact} {item.faNode}
                </p>
              </div>
            </div>

          </div>

        ))}
      </div>

      {/* * * * block-2 * * * */}
      <div className="overflow-y-auto p-3"
        style={{ maxHeight: '30rem' }}>
        <div className='hidden sm:block'>
          <div className='grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3 lg:grid-cols-4 lg:gap-4 m-2'>

            {filtered.sort((a, b) => a.title.localeCompare(b.title)).map((item) => (

              <div
                className='border rounded-lg text-center m-2
                  transition ease-in-out delay-150 duration-500 hover:-translate-y-1 hover:scale-110'
                key={item.title}>

                {/* * * * div-1 * * * */}
                <div>
                  <a
                    href={item.web}
                    target="_blank">
                    <img
                      className='w-full h-full rounded-t-md'
                      href={item.web}
                      alt='Website image'
                      src={item.img}
                    />
                  </a>
                </div>

                {/* * * * div-2 * * * */}
                <div>
                  <p className="text-cyan-600 font-semibold text-sm sm:text-base md:text-lg">{item.title}</p>
                  <p className="text-xs sm:text-sm md:text-base"> Frontend{' '}
                    <a
                      href={item.github}
                      target="_blank"
                      className="font-semibold underline underline-offset-2">
                      Github
                    </a>
                  </p>
                  <div className={item.id != 3 ? 'hidden' : 'block'}>
                    <p className="text-xs sm:text-sm md:text-base"> Backend{' '}
                      <a
                        href={item.backgithub}
                        target="_blank"
                        className="font-semibold underline underline-offset-2">
                        Github
                      </a>
                    </p>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base"> Ver sitio{' '}
                    <a
                      href={item.web}
                      target="_blank"
                      className="font-semibold underline underline-offset-2">
                      Web
                    </a>
                  </p>
                  <div>
                    <p className="text-base xs:text-lg md:text-xl">
                      {item.faHtml5} {item.faCss3Alt} {item.faJsSquare} {item.faReact} {item.faNode}
                    </p>
                  </div>
                </div>

              </div>

            ))}

          </div>
        </div>
      </div>

    </div >

  );
};