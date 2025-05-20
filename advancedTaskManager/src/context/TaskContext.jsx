import { createContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const TaskContext = createContext(null);
export default function TaskProvider({ children }) {
    const [tasks, setTasks] = useLocalStorage("task", []);
    const addTask = (data) => {
        setTasks((prev) => [...prev, data]);
    };

    const toggleCompleted = () => {};

    const deleteTask = () => {};

    return (
        <TaskContext.Provider
            value={{ addTask, toggleCompleted, deleteTask, tasks }}
        >
            {children}
        </TaskContext.Provider>
    );
}
