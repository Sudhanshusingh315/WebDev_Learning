import { controlsUtils } from "fabric";
import { use, useEffect, useState } from "react";

export default function Settings({ canvas, setCanvas }) {
  const [selectedObject, setSelectedObject] = useState(null);
  const [width, setWidth] = useState(null);
  const [height, setHeight] = useState(null);
  const [diameter, setDiameter] = useState(null);
  const [color, setColor] = useState("");

  useEffect(() => {
    if (canvas) {
      canvas.on("selection:created", (event) => {
        console.log("Created ");
        handleObjectSelection(event.selected[0]);
      });

      canvas.on("slection:updated", (event) => {
        console.log("updated movement");
        handleObjectSelection(event.selected[0]);
      });

      canvas.on("selection:cleared", () => {
        setSelectedObject(null);
        console.log("selection cleared");
        clearSettings();
      });

      canvas.on("object:modified", (event) => {
        console.log("modified an object");
        handleObjectSelection(event.target);
      });

      canvas.on("object:scaling", (event) => {
        handleObjectSelection(event.target);
      });
    }
  }, [canvas]);

  const handleObjectSelection = (object) => {
    if (!object) return;
    setSelectedObject(object);
    switch (object.type) {
      case "rect":
        setWidth(Math.round(object.width * object.scaleX));
        setHeight(Math.round(object.height * object.scaleY));
        setColor(object.fill);
        setDiameter("");
        break;

      case "circle":
        setDiameter(Math.round(object.round * 2 * object.scaleX));
        setColor(object.fill);
        setWidth("");
        setHeight("");
        break;

      default:
        console.error("Object escaping ");
        break;
    }
  };

  const clearSettings = () => {
    setWidth("");
    setHeight("");
    setColor("");
    setDiameter("");
  };

  const handleChangeWidth = (e) => {
    const initValue = parseInt(e.target.value);
    setWidth(initValue);

    if (selectedObject && selectedObject.type === "rect" && initValue >= 0) {
      setSelectedObject((prev) => prev.set({ width: initValue / prev.scaleX }));
      canvas.renderAll();
    }
  };

  const handleChangeHeight = (e) => {
    // if (isNaN(e.target.value)) return;

    const initValue = parseInt(e.target.value);
    setHeight(initValue);

    if (selectedObject && selectedObject.type === "rect" && initValue >= 0) {
      setSelectedObject((prev) =>
        prev.set({ height: initValue / prev.scaleY })
      );
      canvas.renderAll();
    }
  };

  const handleColorChange = (e) => {
    const colorValue = e.target.value;
    setSelectedObject((prev) => prev.set("fill", colorValue));
    canvas.renderAll();
  };

  const handleChangeDiameter = (e) => {
    const initValue = parseInt(e.target.value);
    setDiameter(initValue);

    if (selectedObject && selectedObject.type === "circle" && initValue >= 0) {
      setSelectedObject((prev) =>
        prev.set({ radius: initValue / 2 / selectedObject.scaleX })
      );
      canvas.renderAll();
    }
  };

  return (
    <div>
      <p style={{ position: "fixed", left: "50%", top: "0%" }}>
        Settings panel will appear on the top right (i know i'm not cent)
      </p>
      {selectedObject && selectedObject.type === "rect" && (
        <div className="settings">
          <input
            placeholder="Width"
            value={width}
            type="text"
            onChange={handleChangeWidth}
          />
          <input
            placeholder="Height"
            type="number"
            value={height}
            onChange={handleChangeHeight}
          />
          <input
            onChange={(e) => {
              handleColorChange(e);
            }}
            type="color"
            value={color}
          />
        </div>
      )}
      {selectedObject && selectedObject.type === "circle" && (
        <div className="settings">
          <input
            placeholder="Diameter"
            value={diameter}
            onChange={handleChangeDiameter}
            type="text"
          />
          <input type="color" value={color} onChange={handleColorChange} />
        </div>
      )}
    </div>
  );
}
