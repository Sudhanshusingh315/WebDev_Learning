import { Line } from "fabric";

const snappingDistance = 20;

export const handleObjectMoving = (canvas, obj, guidelines, setGuidelines) => {
  const canvasWidth = canvas.width;
  const canvasHeight = canvas.height;
  const left = obj.left;
  const top = obj.top;
  const right = left + obj.width * obj.scaleX;
  const bottom = top + obj.height * obj.scaleY;

  const centerX = left + (obj.width * obj.scaleX) / 2;
  const centerY = top + (obj.height * obj.scaleY) / 2;

  let newGuideLines = [];

  clearGuidelines(canvas);

  let snapped = false;

  /*
 left works
 right works
 top works

 bottom does not work
 vertical center does not work
 horizaontal center does not work 



*/

  if (Math.abs(left) < snappingDistance) {
    obj.set({ left: 0 });
    if (!guidelineExists(canvas, "veritcal-left")) {
      const line = createVerticalGuideline(canvas, 0, "vertical-left");
      newGuideLines.push(line);
      canvas.add(line);
    }
    snapped = true;
  }

  if (Math.abs(top) < snappingDistance) {
    obj.set({ top: 0 });
    if (!guidelineExists(canvas, "horizontal-top")) {
      const line = createHorizontalGuidelines(canvas, 0, "horizontal-top");
      newGuideLines.push(line);
      canvas.add(line);
    }
    snapped = true;
  }

  if (Math.abs(right - canvasWidth) < snappingDistance) {
    obj.set({ left: canvasWidth - obj.width * obj.scaleX });
    if (!guidelineExists(canvas, "vertical-right")) {
      const line = createVerticalGuideline(
        canvas,
        canvasWidth,
        "vertical-right"
      );
      newGuideLines.push(line);
      canvas.add(line);
    }
    snapped = true;
  }

  if (Math.abs(bottom - canvasHeight) < snappingDistance) {
    obj.set({ top: canvasHeight - obj.height * obj.scaleY });
    if (!guidelineExists(canvas, "horizontal-bottom")) {
      const line = createHorizontalGuidelines(
        canvas,
        canvasHeight,
        "horizontal-bottom"
      );
      newGuideLines.push(line);
      canvas.add(line);
    }
    snapped = true;
  }

  if (Math.abs(centerX - canvasWidth / 2) < snappingDistance) {
    obj.set({ left: canvasWidth / 2 - (obj.width * obj.scaleX) / 2 });
    if (!guidelineExists(canvas, "vertical-center")) {
      const line = createVerticalGuideline(
        canvas,
        canvasWidth / 2,
        "vertical-center"
      );
      newGuideLines.push(line);
      canvas.add(line);
    }
    snapped = true;
  }

  if (Math.abs(centerY - canvasHeight / 2) < snappingDistance) {
    obj.set({ top: canvasHeight / 2 - (obj.height * obj.scaleY) / 2 });
    if (!guidelineExists(canvas, "horizontal-center")) {
      const line = createHorizontalGuidelines(
        canvas,
        canvasHeight / 2,
        "horizontal-center"
      );
      newGuideLines.push(line);
      canvas.add(line);
    }
    snapped = true;
  }

  if (!snapped) {
    clearGuidelines(canvas);
  } else {
    obj.setCoords();
    setGuidelines(newGuideLines);
  }

  canvas.renderAll();
};

export const clearGuidelines = (canvas) => {
  const objects = canvas.getObjects("line");
  objects.forEach((obj) => {
    if (
      (obj.id && obj.id.startsWith("vertical-")) ||
      obj.id.startsWith("horizontal-")
    ) {
      canvas.remove(obj);
    }
  });
  canvas.renderAll();
};

export const createVerticalGuideline = (canvas, x, id) => {
  return new Line([x, 0, x, canvas.height], {
    id,
    stroke: "red",
    strokeWidth: 4,
    selectable: false,
    evented: false,
    strokeDashArray: [5, 5],
    opacity: 0.8,
  });
};
export const createHorizontalGuidelines = (canvas, y, id) => {
  return new Line([0, y, canvas.width, y], {
    id,
    stroke: "blue",
    strokeWidth: 4,
    selectable: false,
    evented: false,
    strokeDashArray: [5, 5],
    opacity: 0.8,
  });
};

export const guidelineExists = (canvas, id) => {
  const objects = canvas.getObjects("line");
  return objects.some((obj) => obj.id === id);
};
