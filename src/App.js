import SketchContextProvider from "./components/contexts/SketchDataContext";
import Canvas from "./components/Canvas";
import "./App.css";

function App() {
  return (
    <SketchContextProvider>
      <div className="App">
        <h1>Etch-a-Sketch</h1>
        <Canvas />
      </div>
    </SketchContextProvider>
  );
}

export default App;
