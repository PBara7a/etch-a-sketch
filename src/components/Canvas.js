import { useState } from "react";
import { useSketchData } from "./contexts/SketchDataContext";
import Square from "./Square";

const Canvas = () => {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const { side, canvasGridSquares } = useSketchData();

  const canvasGridSize = {
    gridTemplateRows: `repeat(${side}, 1fr)`,
    gridTemplateColumns: `repeat(${side}, 1fr)`,
  };

  return (
    <div className="canvas-container">
      <div
        className="canvas"
        style={canvasGridSize}
        onMouseDown={() => setIsMouseDown(true)}
        onMouseUp={() => setIsMouseDown(false)}
      >
        {canvasGridSquares.map((_, i) => (
          <Square key={i} isMouseDown={isMouseDown} />
        ))}
      </div>
    </div>
  );
};

export default Canvas;
