import { createContext, useContext, useState } from "react";

const SketchContext = createContext();

export const useSketchData = () => useContext(SketchContext);

const SketchContextProvider = ({ children }) => {
  const [color, setColor] = useState("#000");
  const [mode, setMode] = useState("draw");

  const value = {
    color,
    setColor,
    mode,
    setMode,
  };

  return (
    <SketchContext.Provider value={value}>{children}</SketchContext.Provider>
  );
};

export default SketchContextProvider;
