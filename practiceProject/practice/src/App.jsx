import { useMemo, useState } from "react";
import "./App.css";
import useCustomMemo from "./useCustomMemo";

// custom useMmemo
export default function App() {
    const [counter, setCounter] = useState(0);
    const [input, setInput] = useState("");
    function expensiveCalculation(num) {
        console.log("running expensive calculation");
        for (let i = 0; i <= 100; i++) {}
        return num * 2;
    }

    const doubleValue = useCustomMemo(
        () => expensiveCalculation(counter),
        [counter]
    );
    return (
        <div>
            <h2>Count: {counter}</h2>
            <h4>Count: {doubleValue}</h4>
            <button onClick={() => setCounter((prev) => prev + 1)}>
                increment
            </button>
            <input
                placeholder="type something"
                value={input}
                onChange={(e) => {
                    setInput(e.target.value);
                }}
            />
        </div>
    );
}
