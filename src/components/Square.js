const Square = ({ isMouseDown }) => {
  const handleHover = (e) => {
    if (!isMouseDown) return;

    e.target.style.background = "#000";
  };

  return <div className="square" onMouseEnter={handleHover}></div>;
};

export default Square;
