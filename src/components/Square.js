import { useSketchData } from "./contexts/SketchDataContext";

const Square = () => {
  const { color, mode } = useSketchData();

  const paintSquare = (e) => {
    if ((e.type === "mouseenter" && e.buttons > 0) || e.type === "click") {
      if (mode === "eraser") {
        e.target.style.background = "#fff";
      } else if (mode === "rainbow") {
        e.target.style.background = randomColor();
      } else {
        e.target.style.background = color;
      }
    }
  };

  return (
    <div
      className="square"
      onMouseEnter={paintSquare}
      onClick={paintSquare}
    ></div>
  );
};

const randomColor = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

export default Square;
