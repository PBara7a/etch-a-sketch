import { useRef } from "react";
import { useSketchData } from "./contexts/SketchDataContext";
import Square from "./Square";
import exportAsImage from "../utils/exportComponentAsImage";

const Canvas = () => {
  const { side, canvasGridSquares, setCanvasRef } = useSketchData();
  const canvasRef = useRef();

  setCanvasRef(canvasRef.current);

  const canvasGridSize = {
    gridTemplateRows: `repeat(${side}, 1fr)`,
    gridTemplateColumns: `repeat(${side}, 1fr)`,
  };

  const handleClick = () => exportAsImage(canvasRef.current, "test");

  return (
    <div className="canvas-container">
      <div ref={canvasRef} className="canvas" style={canvasGridSize}>
        {canvasGridSquares.map((_, i) => (
          <Square key={i} />
        ))}
      </div>
      <button onClick={handleClick}>Download</button>
    </div>
  );
};

export default Canvas;
