import { useSketchData } from "./contexts/SketchDataContext";

const Square = ({ isMouseDown }) => {
  const { color } = useSketchData();

  const handleHover = (e) => {
    if (!isMouseDown) return;

    e.target.style.background = color;
  };

  return <div className="square" onMouseEnter={handleHover}></div>;
};

export default Square;
