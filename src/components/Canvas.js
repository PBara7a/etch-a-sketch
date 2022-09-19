import { useSketchData } from "./contexts/SketchDataContext";
import Square from "./Square";

const Canvas = () => {
  const state = useSketchData();

  const squares = Array.from(Array(state.canvasSide ** 2).keys());

  return (
    <div className="canvas">
      {squares.map((square, i) => (
        <Square key={i} />
      ))}
    </div>
  );
};

export default Canvas;
