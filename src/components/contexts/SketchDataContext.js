import { createContext, useContext, useState } from "react";

const SketchContext = createContext();

export const useSketchData = () => useContext(SketchContext);

const SketchContextProvider = ({ children }) => {
  const [color, setColor] = useState("#000");
  const [mode, setMode] = useState("draw");
  const [side, setSide] = useState(32);
  const [canvasRef, setCanvasRef] = useState();

  const canvasGridSquares = Array.from(Array(side ** 2).keys());

  const clearCanvas = () => {
    const canvasSquares = [...canvasRef.children];

    canvasSquares.forEach((square) => {
      square.style.background = "#fff";
    });
  };

  const updateSide = (num) => {
    setSide(num);
    clearCanvas();
  };

  const value = {
    color,
    setColor,
    mode,
    setMode,
    side,
    updateSide,
    canvasGridSquares,
    clearCanvas,
    setCanvasRef,
  };

  return (
    <SketchContext.Provider value={value}>{children}</SketchContext.Provider>
  );
};

export default SketchContextProvider;
