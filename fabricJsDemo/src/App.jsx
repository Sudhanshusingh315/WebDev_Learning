import { useRef } from "react";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import { Canvas, Circle, Rect } from "fabric";
import { Circle as CircleIcon, Square } from "lucide-react";

function App() {
    const canvasRef = useRef(null);
    const [canvas, setCanvas] = useState(null);

    useEffect(() => {
        if (canvasRef.current) {
            const initCanvas = new Canvas(canvasRef.current, {
                width: 500,
                height: 500,
            });

            initCanvas.backgroundColor = "#fff";
            initCanvas.renderAll();
            setCanvas(initCanvas);

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
                fill: "coral",
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
                fill: "yellowgreen",
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
            </div>
        </>
    );
}

export default App;
