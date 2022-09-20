import { createContext, useContext, useState } from "react";

const SketchContext = createContext();

export const useSketchData = () => useContext(SketchContext);

const SketchContextProvider = ({ children }) => {
  const [color, setColor] = useState("#000");

  const value = {
    color,
    setColor,
  };

  return (
    <SketchContext.Provider value={value}>{children}</SketchContext.Provider>
  );
};

export default SketchContextProvider;
