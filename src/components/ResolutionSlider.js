const ResolutionSlider = ({ side, updateSide }) => {
  return (
    <div className="resolution-slider">
      <label htmlFor="canvas-res">{`${side} x ${side}`}</label>
      <input
        type="range"
        id="canvas-res"
        name="canvas-res"
        min="1"
        max="64"
        value={side}
        onChange={(e) => updateSide(e.target.value)}
      />
    </div>
  );
};

export default ResolutionSlider;
