import { Canvas } from "fabric";
import { Eye, MoveDown, MoveUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function Layerlist({ canvas }) {
  const [layers, setLayers] = useState([]);
  const [selectdLayers, setSelectedlayers] = useState(null);
  const [layerOpacityMap, setLayerOpacityMap] = useState({});
  console.log("opacity", layerOpacityMap);

  const showSelectedLayer = () => {
    if (!selectedLayer) return;

    const object = canvas.getObjects().find((obj) => obj.id === selectedLayer);
    if (!object) return;

    setLayerOpacityMap((prevMap) => {
      const newMap = { ...prevMap };

      if (newMap[selectedLayer]) {
        object.opacity = newMap[selectedLayer]; // Restore opacity
        canvas.renderAll();
      }

      return newMap;
    });
  };

  const hideSelectedLayer = () => {
    if (!selectdLayers) return;

    const object = canvas.getObjects().find((obj) => obj.id === selectdLayers);
    if (!object) return;

    setLayerOpacityMap((prevMap) => {
      const newMap = { ...prevMap };

      // Save original opacity if not already saved
      if (!newMap[selectdLayers]) {
        newMap[selectdLayers] = object.opacity;
      }

      // Toggle visibility (opacity 0 ↔ original opacity)
      object.opacity = object.opacity === 0 ? newMap[selectdLayers] : 0;

      canvas.renderAll();

      return newMap;
    });
  };

  const moveSelectedLayer = (direction) => {
    if (!selectdLayers) return;

    const objects = canvas.getObjects();
    const object = objects.find((obj) => obj.id === selectdLayers);

    if (!object) return;

    const currentIndex = objects.indexOf(object);

    if (direction === "up" && currentIndex < objects.length - 1) {
      const temp = objects[currentIndex];
      objects[currentIndex] = objects[currentIndex + 1];
      objects[currentIndex + 1] = temp;
    } else if (direction === "down" && currentIndex > 0) {
      // Swap with object below
      const temp = objects[currentIndex];
      objects[currentIndex] = objects[currentIndex - 1];
      objects[currentIndex - 1] = temp;
    }

    // Save original background color
    const backgroundColor = canvas.backgroundColor;

    // Clear canvas and re-add in new order
    canvas.clear();
    objects.forEach((obj) => canvas.add(obj));
    canvas.backgroundColor = backgroundColor;
    canvas.renderAll();

    // Reassign zIndexes (optional but good practice)
    objects.forEach((obj, index) => {
      obj.zIndex = index;
    });

    // Restore active selection
    canvas.setActiveObject(object);
    canvas.renderAll();
    updateLayres();
  };

  const addToObject = (object) => {
    if (!object.id) {
      const timestamp = new Date().getTime();
      object.id = `${object.type}-${timestamp}`;
    }
  };

  Canvas.prototype.updateZIndices = function () {
    const objects = this.getObjects();
    objects.forEach((obj, index) => {
      addToObject(obj);
      obj.zIndex = index;
    });
  };

  const updateLayres = () => {
    if (canvas) {
      canvas.updateZIndices();
      const objects = canvas
        .getObjects()
        .filter(
          (obj) =>
            !(
              obj.id.startsWith("vertical-") || obj.id.startsWith("horizontal-")
            )
        )
        .map((obj) => ({
          id: obj.id,
          zIndex: obj.zIndex,
          type: obj.type,
        }));
      setLayers([...objects].reverse());
    }
  };

  const handleObjectSelected = (e) => {
    const selectedObject = e.selected ? e.selected[0] : null;
    if (selectedObject) {
      setSelectedlayers(selectedObject.id);
    } else {
      setSelectedlayers(null);
    }
  };

  const selectLayerInCanvas = (layerId) => {
    const object = canvas.getObjects().find((obj) => obj.id === layerId);
    if (object) {
      canvas.setActiveObject(object);
      canvas.renderAll();
    }
  };

  useEffect(() => {
    if (canvas) {
      canvas.on("object:added", updateLayres);
      canvas.on("object:removed", updateLayres);
      canvas.on("object:modified", updateLayres);

      canvas.on("selection:created", handleObjectSelected);
      canvas.on("selection:updated", handleObjectSelected);
      canvas.on("selection:cleared", () => setSelectedlayers(null));

      updateLayres();

      return () => {
        canvas.off("object:added", updateLayres);
        canvas.off("object:removed", updateLayres);
        canvas.off("object:modified", updateLayres);

        canvas.off("selection:created", handleObjectSelected);
        canvas.off("selection:updated", handleObjectSelected);
        canvas.off("selection:cleared", () => setSelectedlayers(null));
      };
    }
  }, [canvas]);

  return (
    <div>
      <div
        style={{
          padding: ".5rem",
          display: "flex",
          gap: "5px",
        }}
      >
        <MoveUp
          style={{
            cursor: "pointer",
            padding: ".2rem",
            backgroundColor: "darkblue",
            color: "white",
          }}
          onClick={() => {
            moveSelectedLayer("up");
          }}
        />
        <MoveDown
          style={{
            cursor: "pointer",
            padding: ".2rem",
            backgroundColor: "darkblue",
            color: "white",
          }}
          onClick={() => {
            moveSelectedLayer("down");
          }}
        />
        <Eye
          style={{
            cursor: "pointer",
            padding: ".2rem",
            backgroundColor: "darkblue",
            color: "white",
          }}
          onClick={hideSelectedLayer}
        />
      </div>
      <ul>
        {layers.map((layer) => {
          return (
            <li
              style={{ cursor: "pointer" }}
              className={layer.id === selectdLayers ? "selected-layer" : ""}
              key={layer.id}
              onClick={() => selectLayerInCanvas(layer.id)}
            >
              {layer.type} ({layer.zIndex})
            </li>
          );
        })}
      </ul>
    </div>
  );
}
