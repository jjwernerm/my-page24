import { createContext, useState } from 'react';

import { technologiesArray } from '../data/DataTechnologies.jsx';

export const SelectTechnologyContext = createContext();

export const SelectTechnologyProvider = ({ children }) => {
  const [selected, setSelected] = useState(technologiesArray[0])

  return (
    <SelectTechnologyContext.Provider value={{ selected, setSelected, technologiesArray }}>
      {children}
    </SelectTechnologyContext.Provider>
  );
};