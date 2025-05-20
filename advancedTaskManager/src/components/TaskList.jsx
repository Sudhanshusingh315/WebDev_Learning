import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { DndContext, closestCorners } from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import Taskitem from "./TaskItem";
import { FILTERS } from "../constants/constants";

export default function TaskList() {
  const { tasks, setTasks, changeFilter, setFilter } = useContext(TaskContext);

  const getItemPosition = (id) => {
    return tasks.findIndex((task) => task.id === id);
  };

  const handleDragEnd = (e) => {
    const { active, over } = e;

    if (active.id === over.id) return;

    setTasks((tasks) => {
      const originalPosition = getItemPosition(active.id);
      const newPosition = getItemPosition(over.id);
      return arrayMove(tasks, originalPosition, newPosition);
    });
  };

  return (
    <div className="task-list-container">
      <div className="filters">
        <button
          onClick={() => {
            setFilter(FILTERS.ALL);
          }}
        >
          All
        </button>
        <button
          onClick={() => {
            setFilter(FILTERS.PENDING);
          }}
        >
          Pending
        </button>
        <button
          onClick={() => {
            setFilter(FILTERS.COMPLETED);
          }}
        >
          Completed
        </button>
      </div>
      <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
        <SortableContext
          items={tasks.map((t) => t.id)}
          strategy={verticalListSortingStrategy}
        >
          <div
            className="list-container"
            style={{
              boxShadow:
                tasks?.length > 0 ? "rgba(0, 0, 0, 0.24) 0px 3px 8px" : "",
            }}
          >
            {tasks?.map((element) => {
              return (
                <Taskitem key={element.id} id={element.id} element={element} />
              );
            })}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
}
