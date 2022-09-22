import SketchContextProvider from "./components/contexts/SketchDataContext";
import Controls from "./components/Controls";
import Canvas from "./components/Canvas";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <SketchContextProvider>
      <div className="App">
        <div></div>
        <div>
          <h1>Etch-a-Sketch</h1>
          <div className="main">
            <Controls />
            <Canvas />
          </div>
        </div>
        <Footer />
      </div>
    </SketchContextProvider>
  );
}

export default App;
