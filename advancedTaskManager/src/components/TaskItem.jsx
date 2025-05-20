import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { CircleCheckBig, GripVertical, Trash2 } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { TaskContext } from "../context/TaskContext";

export default function Taskitem({ id, element }) {
  const { toggleCompleted, deleteTask } = useContext(TaskContext);
  const [isDragging, setIsDragging] = useState(false);
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging: bringDragged,
  } = useSortable({ id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
    animation: isDragging ? "none" : undefined,
  };

  useEffect(() => {
    setIsDragging(bringDragged);
  }, [bringDragged]);

  return (
    <div
      ref={setNodeRef}
      style={{
        ...style,
        textDecoration: element?.isCompleted ? "line-through" : "",
      }}
      className={`task-list ${isDragging ? "draggin" : ""}`}
    >
      <p className="task-info">{element.text}</p>
      <p className="call-to-action">
        <Trash2
          onClick={() => {
            deleteTask(id);
          }}
        />
        <CircleCheckBig
          color={`${element?.isCompleted ? "green" : "red"}`}
          onClick={() => {
            toggleCompleted(id);
          }}
        />
        <GripVertical {...attributes} {...listeners} />
      </p>
    </div>
  );
}
