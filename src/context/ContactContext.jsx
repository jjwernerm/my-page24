import { createContext, useState } from 'react';

export const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const [name, setName] = useState('');

  return (

    <ContactContext.Provider value={{ name, setName }}>
      {children}
    </ContactContext.Provider>
  );
};