export default function Home() {

  return (
    <>
      <div className='min-h-72 flex justify-center items-end text-white text-center mx-4'>
        <div>
          <p className="mb-4 font-bold underline">Desarrollo FullStack JS</p>
          <p className="mb-6">
            A continuación un pequeño proyecto utilizando el stack tecnológico MERN,
            donde se puede ver un ejemplo de CRUD (Crear, Leer, Actualizar, Eliminar).
          </p>
          <p className="mb-4">Procesando datos de "productos"</p>
        </div>
      </div>
      <div className="text-center my-4">
        <a href='https://front-registrar.vercel.app/' className="text-white underline mx-2">
          Registrar
        </a>
        <a href='https://front-mostrar.vercel.app/' className="text-white underline mx-2">
          Mostrar Lista
        </a>
      </div>
      <div className="text-center my-4">
        <a href='https://front-consultar.vercel.app/' className="text-white underline mx-2">
          Consultar
        </a>
        <a href='https://front-editar.vercel.app/' className="text-white underline mx-2">
          Editar
        </a>
      </div>
      <div className="text-center my-4">
        <a href='https://front-eliminar.vercel.app/' className="text-white underline mx-2">
          Eliminar
        </a>
      </div>      
    </>
  );
};