import { useRef } from "react";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import { Canvas, Circle, Rect } from "fabric";
import { Circle as CircleIcon, Square } from "lucide-react";
import Settings from "./settings";
import CanvasSettings from "./CanvasSettings";
import { handleObjectMoving, clearGuidelines } from "./helper/SnappingHelper";
import Layerlist from "./Layerlist";

function App() {
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState(null);
  const [guidelines, setGuidelines] = useState([]);
  useEffect(() => {
    if (canvasRef.current) {
      const initCanvas = new Canvas(canvasRef.current, {
        enableRetinaScaling: true,
        width: 700,
        height: 700,
      });

      initCanvas.backgroundColor = "#fff";
      initCanvas.renderAll();
      setCanvas(initCanvas);

      initCanvas.on("object:moving", (event) => {
        handleObjectMoving(initCanvas, event.target, guidelines, setGuidelines);
      });

      initCanvas.on("object:modified", () => {
        console.log("i'm canvas", initCanvas);
        clearGuidelines(initCanvas);
      });

      return () => {
        initCanvas.dispose();
      };
    }
  }, []);

  const addRectangle = () => {
    if (canvas) {
      const rect = new Rect({
        left: 100,
        top: 100,
        fill: "#873e23",
        width: 100,
        height: 60,
      });

      canvas.add(rect);
    }
  };

  const addCircle = () => {
    if (canvas) {
      const circle = new Circle({
        top: 150,
        left: 150,
        radius: 50,
        fill: "#9ACD32",
      });

      canvas.add(circle);
    }
  };

  return (
    <>
      <div className="App">
        <div className="tooldar">
          <button onClick={addRectangle}>
            <Square />
          </button>
          <button onClick={addCircle}>
            <CircleIcon />
          </button>
        </div>
        <canvas id="canvas" ref={canvasRef}></canvas>
        <Settings canvas={canvas} setCanvas={setCanvas} />
        <CanvasSettings canvas={canvas} setCanvas={setCanvas} />
        <Layerlist canvas={canvas} />
      </div>
    </>
  );
}

export default App;
