export default function Home() {

  return (

    <div className='min-h-96 flex justify-center items-end text-lg text-white'>
      <div>
        <p className="mb-2 tracking-widest md:text-2xl font-serif">¡Hola! Soy</p>
        <p className='font-bold text-2xl md:text-5xl'>JOANNY WERNER</p>
        <p className="mb-6 tracking-tighter md:text-2xl font-serif">Web Developer</p>
        <a
          href='https://drive.google.com/file/d/1D6LUxy6Jf_bU7ZhK62MqDn_HrATOVz3m/view?usp=sharing'
          target="_blank"
          className="
          bg-cyan-600 text-white p-3 rounded-full
          hover:bg-cyan-500 hover:outline hover:outline-offset-2 hover:outline-cyan-500"
        >
          Descargar CV
        </a>
      </div>
    </div>

  );
};