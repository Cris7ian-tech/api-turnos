// context/AgendaContext.js
import { createContext, useContext, useState } from "react";

const AgendaContext = createContext();

export const AgendaProvider = ({ children }) => {
  const [agenda, setAgenda] = useState([]);

  const agregarEvento = (evento) => {
    setAgenda((prevAgenda) => [...prevAgenda, evento]);
  };

  return (
    <AgendaContext.Provider value={{ agenda, agregarEvento }}>
      {children}
    </AgendaContext.Provider>
  );
};

export const useAgenda = () => useContext(AgendaContext);

