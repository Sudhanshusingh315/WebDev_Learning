import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

let callIndex = -1;
const stateValues = [];

const useMeowstate = (initialValue) => {
    callIndex++;

    const currentCallIndex = callIndex;

    if (stateValues[currentCallIndex] === undefined) {
        stateValues[currentCallIndex] = initialValue;
    }
    const setValue = (newValue) => {
        stateValues[currentCallIndex] = newValue;
        rerenderApp();
    };
    return [stateValues[currentCallIndex], setValue];
};

const App = () => {
    const [countA, setCountA] = useMeowstate(1);
    const [countB, setCountB] = useMeowstate(-1);
    return (
        <>
            <div>
                <h1>Count A:{countA}</h1>
                <button onClick={() => setCountA(countA - 1)}>Subtract</button>
                <button onClick={() => setCountA(countA + 1)}>Add</button>
            </div>
            <div>
                <h1>Count B:{countB}</h1>
                <button onClick={() => setCountB(countB - 1)}>Subtract</button>
                <button onClick={() => setCountB(countB + 1)}>Add</button>
            </div>
        </>
    );
};
const test = document.getElementById("root");
const rerenderApp = () => {
    callIndex = -1;
    createRoot(test).render(<App />);
};

rerenderApp();
