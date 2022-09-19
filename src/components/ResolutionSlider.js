const ResolutionSlider = ({ side, updateSide }) => {
  const handleChange = (e) => {
    const { value } = e.target;
    e.target.previousSibling.previousSibling.style.gridTemplateRows = `repeat(${value}, 1fr)`;
    e.target.previousSibling.previousSibling.style.gridTemplateColumns = `repeat(${value}, 1fr)`;
    updateSide(value);
  };

  return (
    <>
      <label htmlFor="canvas-res">{`${side} x ${side}`}</label>
      <input
        type="range"
        id="canvas-res"
        name="canvas-res"
        min="1"
        max="64"
        value={side}
        onChange={handleChange}
      />
    </>
  );
};

export default ResolutionSlider;
