import { createContext, useMemo, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { FILTERS } from "../constants/constants";

export const TaskContext = createContext(null);
export default function TaskProvider({ children }) {
  const [tasks, setTasks] = useLocalStorage("task", []);
  const [filter, setFilter] = useState(FILTERS.ALL);

  const addTask = (data) => {
    setTasks((prev) => [...prev, data]);
  };

  const toggleCompleted = (id) => {
    console.log("id i've got", id);
    setTasks((prev) => {
      const index = prev.findIndex((task) => task.id === id);
      if (index === -1) return prev;
      const updatedTask = {
        ...prev[index],
        isCompleted: !prev[index].isCompleted,
      };
      const newTasks = [...prev];
      newTasks[index] = updatedTask;
      return newTasks;
    });
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const changeFilter = useMemo(() => {
    console.log(`filter ${filter} and taskType ${FILTERS.PENDING}`);
    if (filter === FILTERS.PENDING) {
      const value = tasks.filter((task) => !task.isCompleted);
      console.log("value", value);
      return value;
    }
    if (filter === FILTERS.COMPLETED)
      return tasks.filter((task) => task.isCompleted);
    return tasks;
  }, [filter, tasks]);

  return (
    <TaskContext.Provider
      value={{
        addTask,
        setTasks,
        filter,
        setFilter,
        toggleCompleted,
        deleteTask,
        tasks: changeFilter,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
