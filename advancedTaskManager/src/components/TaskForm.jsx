import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskForm() {
    const [inputValue, setInputValue] = useState("");

    const { addTask } = useContext(TaskContext);
    const handleOnChangeInput = (e) => {
        console.log("functoin call", e.target.value);
        setInputValue(e.target.value);
    };
    const handlesubmit = (e) => {
        e.preventDefault();
        if (!inputValue) return;
        const data = {
            id: Date.now(),
            text: inputValue,
            isCompleted: false,
        };
        addTask(data);
        setInputValue("");
    };
    return (
        <form onSubmit={handlesubmit} className="task-form">
            <input
                placeholder="Add a task"
                value={inputValue}
                onChange={handleOnChangeInput}
            />
            <button type="submit">Add task</button>
        </form>
    );
}
