import { useState } from "react";
import Square from "./Square";
import ResolutionSlider from "./ResolutionSlider";

const Canvas = () => {
  const [side, setSide] = useState(32);

  const squares = Array.from(Array(side ** 2).keys());

  return (
    <>
      <div className="canvas">
        {squares.map((_, i) => (
          <Square key={i} />
        ))}
      </div>
      <ResolutionSlider side={side} updateSide={setSide} />
    </>
  );
};

export default Canvas;
