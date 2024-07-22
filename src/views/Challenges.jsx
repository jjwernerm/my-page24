import {
  challengesArray
} from '../data/DataChallenges.jsx';

export default function Challenges() {
  return (
    <>
      <div className="bg-gray-900 text-white shadow-md shadow-gray-700 mt-28 m-4 p-3 rounded-xl">

        <div className="p-3 border-b border-gray-500">
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

        {/* * * * block-1 * * * */}
        <div className="max-h-96 overflow-y-auto p-3">

          {challengesArray.sort((a, b) => a.title.localeCompare(b.title)).map((item) => (

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
                <p className="text-xs sm:text-sm md:text-base"> Repositorio{' '}
                  <a
                    href={item.github}
                    target="_blank"
                    className="font-semibold underline underline-offset-2">
                    Github
                  </a>
                </p>
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
                    {item.faHtml5} {item.faCss3Alt} {item.faJsSquare} {item.faReact}
                  </p>
                </div>
              </div>

            </div>

          ))}
        </div>

        {/* * * * block-2 * * * */}
        <div className="max-h-96 overflow-y-auto p-3">
          <div className='hidden sm:block'>
            <div className='grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3 lg:grid-cols-4 lg:gap-4 m-2'>

              {challengesArray.sort((a, b) => a.title.localeCompare(b.title)).map((item) => (

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
                    <p className="text-xs sm:text-sm md:text-base"> Repositorio{' '}
                      <a
                        href={item.github}
                        target="_blank"
                        className="font-semibold underline underline-offset-2">
                        Github
                      </a>
                    </p>
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
                        {item.faHtml5} {item.faCss3Alt} {item.faJsSquare} {item.faReact}
                      </p>
                    </div>
                  </div>

                </div>

              ))}

            </div>
          </div>
        </div>

      </div >
    </>
  );
};