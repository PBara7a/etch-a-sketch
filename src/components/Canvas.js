import { useState } from "react";
import Square from "./Square";
import ResolutionSlider from "./ResolutionSlider";

const Canvas = () => {
  const [side, setSide] = useState(32);
  const [isMouseDown, setIsMouseDown] = useState(false);

  const squares = Array.from(Array(side ** 2).keys());

  return (
    <div className="canvas-container">
      <div
        className="canvas"
        onMouseDown={() => setIsMouseDown(true)}
        onMouseUp={() => setIsMouseDown(false)}
      >
        {squares.map((_, i) => (
          <Square key={i} isMouseDown={isMouseDown} />
        ))}
      </div>
      <ResolutionSlider side={side} updateSide={setSide} />
    </div>
  );
};

export default Canvas;
