import { useState } from "react";
import SketchContextProvider from "./components/contexts/SketchDataContext";
import Controls from "./components/Controls";
import Canvas from "./components/Canvas";
import "./App.css";

function App() {
  const [isMouseDown, setIsMouseDown] = useState(false);

  const handleMouseClicks = (e) => {
    if (e.type === "mousedown" && !isMouseDown) {
      setIsMouseDown(true);
    } else if (e.type === "mouseup" && isMouseDown) {
      setIsMouseDown(false);
    }
  };

  return (
    <SketchContextProvider>
      <div
        className="App"
        onMouseDown={handleMouseClicks}
        onMouseUp={handleMouseClicks}
      >
        <h1>Etch-a-Sketch</h1>
        <div className="main">
          <Controls />
          <Canvas isMouseDown={isMouseDown} />
        </div>
      </div>
    </SketchContextProvider>
  );
}

export default App;
