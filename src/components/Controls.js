import { useSketchData } from "./contexts/SketchDataContext";
import ResolutionSlider from "./ResolutionSlider";

const Controls = () => {
  const { color, setColor, mode, setMode, side, setSide, clearCanvas } =
    useSketchData();

  return (
    <div className="control-panel">
      <div className="control-panel__draw-options">
        <label
          htmlFor="color-picker"
          className="color-picker__label"
          style={{ background: color }}
        />
        <input
          type="color"
          className="color-picker"
          id="color-picker"
          onChange={(e) => setColor(e.target.value)}
        />

        <button
          className={"control-btn" + (mode === "draw" ? " active" : "")}
          name="draw"
          onClick={(e) => setMode(e.target.name)}
        >
          Draw
        </button>
        <button
          className={"control-btn" + (mode === "rainbow" ? " active" : "")}
          name="rainbow"
          onClick={(e) => setMode(e.target.name)}
        >
          Rainbow
        </button>

        <button
          className={"control-btn" + (mode === "eraser" ? " active" : "")}
          name="eraser"
          onClick={(e) => setMode(e.target.name)}
        >
          Eraser
        </button>
      </div>

      <ResolutionSlider side={side} updateSide={setSide} />

      <button className="control-btn" onClick={clearCanvas}>
        Clear
      </button>
    </div>
  );
};

export default Controls;
