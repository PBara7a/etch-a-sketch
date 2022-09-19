import { createContext, useContext, useState } from "react";
import defaults from "../../defaultConfig";

const SketchContext = createContext();

export const useSketchData = () => useContext(SketchContext);

const SketchContextProvider = ({ children }) => {
  const [state] = useState(defaults);

  return (
    <SketchContext.Provider value={state}>{children}</SketchContext.Provider>
  );
};

export default SketchContextProvider;
