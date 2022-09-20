import { useSketchData } from "./contexts/SketchDataContext";

const Square = ({ isMouseDown }) => {
  const { color, mode } = useSketchData();

  const handleHover = (e) => {
    if (!isMouseDown) return;

    if (mode === "eraser") {
      e.target.style.background = "#fff";
    } else if (mode === "rainbow") {
      e.target.style.background = randomColor();
    } else {
      e.target.style.background = color;
    }
  };

  return <div className="square" onMouseEnter={handleHover}></div>;
};

const randomColor = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

export default Square;
