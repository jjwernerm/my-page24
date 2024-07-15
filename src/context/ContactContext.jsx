import { createContext, useState } from 'react'; // Importar createContext y useState desde React

// Crear el contexto ContactContext
export const ContactContext = createContext();

// Definir el proveedor del contexto ContactProvider
export const ContactProvider = ({ children }) => {
  const [name, setName] = useState(''); // Estado para almacenar en nombre

  return (
    // Proporcionar el contexto ContactContext a los componentes hijos
    <ContactContext.Provider value={{ name, setName }}>
      {children}
    </ContactContext.Provider>
  );
};