import SketchContextProvider from "./components/contexts/SketchDataContext";
import Controls from "./components/Controls";
import Canvas from "./components/Canvas";
import "./App.css";

function App() {
  return (
    <SketchContextProvider>
      <div className="App">
        <h1>Etch-a-Sketch</h1>
        <div className="main">
          <Controls />
          <Canvas />
        </div>
      </div>
    </SketchContextProvider>
  );
}

export default App;
