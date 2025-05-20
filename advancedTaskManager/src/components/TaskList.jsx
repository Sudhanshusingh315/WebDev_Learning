import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { CircleCheckBig, CircleDashed, Trash2 } from "lucide-react";
import { DragDropContext } from "react-beautiful-dnd";

export default function TaskList() {
    const { tasks } = useContext(TaskContext);
    console.log("tasks", tasks);
    return (
        <div className="task-list-container">
            <div className="filters">
                <button>All</button>
                <button>Pending</button>
                <button>Completed</button>
            </div>
            <div
                className="list-container"
                style={{
                    boxShadow:
                        tasks?.length > 0
                            ? "rgba(0, 0, 0, 0.24) 0px 3px 8px"
                            : "",
                }}
            >
                {tasks?.map(({ text }, index) => {
                    return (
                        <div key={index} className="task-list">
                            <p className="task-info">{text}</p>
                            <p className="call-to-action">
                                <Trash2 />
                                <CircleCheckBig />
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
