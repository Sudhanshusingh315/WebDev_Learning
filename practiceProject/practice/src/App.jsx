import { useState } from "react";
import "./App.css";
import { useRef } from "react";

const initialData = {
    Todo: ["Meow 1", "Meow 2", "Meow 3"],
    Completed: ["Meow 4", "Meow 5"],
    Pending: ["Pending hehe", "I'm Pending tooo"],
};
// drag and drop
export default function App() {
    const [data, setData] = useState(initialData);
    const dataRef = useRef(null);

    const handleDragStart = (item, container) => {
        console.log(`picked ${item} from ${container}`);
        dataRef.current = {
            item,
            container,
        };
    };
    const handleDrop = (dropContainer) => {
        setData((prev) => {
            // remove the item from container
            const updatedValue = prev[dataRef.current.container].filter(
                (item) => item !== dataRef.current.item
            );
            prev[dataRef.current.container] = updatedValue;

            // add item to the dropContainer
            return {
                ...prev,
                [dropContainer]: [...prev[dropContainer], dataRef.current.item],
            };
        });
    };

    const handledragOver = (e) => {
        e.preventDefault();
    };
    return (
        <div className="tabs">
            {Object.keys(data)?.map((element, index) => {
                return (
                    <div
                        key={index}
                        className="container"
                        onDragOver={(e) => {
                            handledragOver(e);
                        }}
                        onDrop={() => {
                            handleDrop(element);
                        }}
                    >
                        <div className="heading">{element}</div>
                        {/* items */}
                        <div className="items">
                            {data[element].map((item, idx) => {
                                return (
                                    <div
                                        key={idx}
                                        draggable={true}
                                        onDragStart={() =>
                                            handleDragStart(item, element)
                                        }
                                    >
                                        {item}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
