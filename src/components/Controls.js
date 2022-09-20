import { useState } from "react";

const Controls = () => {
  const [active, setActive] = useState("draw");

  return (
    <div className="control-panel">
      <div className="control-panel__draw-options">
        <label htmlFor="color-picker" className="color-picker__label" />
        <input type="color" className="color-picker" id="color-picker" />

        <button
          className={"control-btn" + (active === "draw" ? " active" : "")}
          name="draw"
          onClick={(e) => setActive(e.target.name)}
        >
          Draw
        </button>
        <button
          className={"control-btn" + (active === "rainbow" ? " active" : "")}
          name="rainbow"
          onClick={(e) => setActive(e.target.name)}
        >
          Rainbow
        </button>

        <button
          className={"control-btn" + (active === "eraser" ? " active" : "")}
          name="eraser"
          onClick={(e) => setActive(e.target.name)}
        >
          Eraser
        </button>
      </div>

      <button className="control-btn">Clear</button>
    </div>
  );
};

export default Controls;
