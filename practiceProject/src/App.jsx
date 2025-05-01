import "./App.css";

import { useState, useRef, use } from "react";

// stop watch
function App() {
    const [time, setTime] = useState(0);
    const [timerStarted, setTimerStared] = useState(false);
    const stopWatchRef = useRef(0);
    const intervalRef = useRef(0);

    const handleStart = () => {
        const stopWatchRef = Date.now() - time;
        // only want this to stop the time
        intervalRef.current = setInterval(() => {
            setTime(Date.now() - stopWatchRef);
        }, 10);
    };
    const handlePause = () => {
        clearInterval(intervalRef.current);
    };
    const handleReset = () => {
        clearInterval(intervalRef.current);
        setTime(0);
    };
    const formatTime = () => {
        let ms = String(Math.floor((time % 1000) / 10)).padStart(2, "0");
        let ss = String(Math.floor((time / 1000) % 60)).padStart(2, "0");
        let mm = String(Math.floor((time / (1000 * 60)) % 60)).padStart(2, "0");
        let hh = String(Math.floor((time / (1000 * 60 * 60)) % 24)).padStart(
            2,
            "0"
        );

        return `${hh}:${mm}:${ss}:${ms}`;
    };

    return (
        <div>
            <div>{formatTime()}</div>
            <button onClick={handleStart}>Start</button>
            <button onClick={handlePause}>Pause</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
}

export default App;
