import {
  icons,
  challengesArray
} from '../data/DataChallenges.jsx';

export default function Challenges() {
  return (
    <>


      <div className='grid grid-cols-3 gap-3 justify-items-center mt-28 text-white '>
        {icons.map((item) => (
          <div
            key={item.name}
            className={`text-center cursor-pointer transition ease-in-out delay-150 duration-100 hover:-translate-y-1 hover:scale-110 ${item.style}`}
          >
            <div className="text-3xl md:text-6xl">
              {item.icon}
            </div>
            <div className="text-sm md:text-xl">
              {item.name}
            </div>
          </div>
        ))}
      </div>


      <div className='grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3 lg:grid-cols-4 lg:gap-4 justify-items-center mt-8'>
        {challengesArray.sort((a, b) => a.title.localeCompare(b.title)
        ).map((item) => (
          <div className='w-32 h-32 md:w-48 md:h-48 flex flex-col items-center p-2 rounded-md shadow-sm shadow-gray-700 bg-gray-800'
            key={item.title}
          >
            <img
              className='w-8 h-8 rounded-md md:w-16 md:h-16 md:rounded-xl'
              alt={item.alt}
              src={item.img}
            />
            <p className='my-1 text-xs md:text-base text-center font-bold text-cyan-600'>
              {item.title}
            </p>
            <div className='w-full h-full flex justify-evenly items-center text-xl text-white'>
              <a
                href={item.hrefTitle}
                target="_blank"
                className="md:text-4xl transition ease-in-out delay-150 duration-100 hover:-translate-y-1 hover:scale-110">
                {item.iconTitle}
              </a>
              <a
                href={item.hrefGithub}
                target="_blank"
                className="md:text-4xl transition ease-in-out delay-150 duration-100 hover:-translate-y-1 hover:scale-110">
                {item.iconGithub}
              </a>
            </div>
          </div>
        ))}
      </div>

    </>
  );
};