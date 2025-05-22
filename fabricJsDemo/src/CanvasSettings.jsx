import { useEffect, useState } from "react";

export default function CanvasSettings({ canvas, setCanvas }) {
  const [canvasWidth, setCanvasWidth] = useState(700);
  const [canvasHeight, setCanvasHeight] = useState(700);
  useEffect(() => {
    if (canvas) {
      setCanvas((prev) => {
        prev.setWidth(canvasWidth);
        prev.setHeight(canvasHeight);
        return prev;
      });
    }
  }, [canvasWidth, canvasHeight, canvas]);

  const handleCanvasWidth = (e) => {
    const initVal = parseInt(e.target.value);
    setCanvasWidth(initVal);
  };

  const handleCanvasHeight = (e) => {
    const initVal = parseInt(e.target.value);
    setCanvasHeight(initVal);
  };
  return (
    <div
      style={{
        backgroundColor: "hotpink",
        margin: "10px",
        borderRadius: "10px",
        padding: "1rem",
        display: "flex",
        gap: ".5rem",
        flexDirection: "column",
      }}
    >
      <input
        placeholder="canvasWidth"
        type="number"
        value={canvasWidth}
        onChange={handleCanvasWidth}
      />
      <input
        placeholder="canvasHeight"
        value={canvasHeight}
        type="number"
        onChange={handleCanvasHeight}
      />
    </div>
  );
}
