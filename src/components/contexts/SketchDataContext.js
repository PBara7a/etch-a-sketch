import { createContext, useContext, useState } from "react";

const SketchContext = createContext();

export const useSketchData = () => useContext(SketchContext);

const SketchContextProvider = ({ children }) => {
  const [config] = useState();

  return (
    <SketchContext.Provider value={config}>{children}</SketchContext.Provider>
  );
};

export default SketchContextProvider;
