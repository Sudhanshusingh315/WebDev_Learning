import "./App.css";

import { useState, useRef, use, useEffect } from "react";

const TimeFactor = {
    Hour: "hh",
    Minute: "mm",
    Seconds: "ss",
};
//timer
const Config = {
    [TimeFactor.Hour]: {
        value: "",
        factor: 60 * 60 * 1000,
        placeHolder: "HH",
    },
    [TimeFactor.Seconds]: {
        value: "",
        factor: 1000,
        placeHolder: "SS",
    },
    [TimeFactor.Minute]: {
        value: "",
        factor: 60 * 1000,
        placeHolder: "MM",
    },
};
const OrderOfTime = [TimeFactor.Hour, TimeFactor.Minute, TimeFactor.Seconds];

function App() {
    const [config, setConfig] = useState(structuredClone(Config));
    const [time, setTime] = useState(0);
    const intervalRef = useRef(null);
    const timeSpentRef = useRef(0);

    const handleChange = (e, data) => {
        const { key } = data;
        setConfig((prev) => {
            return {
                ...prev,
                [key]: { ...prev[key], value: e.target.value },
            };
        });
    };
    console.log(config);
    const handleStart = () => {
        // convert all the time in ms
        let totalTimeInMilliseconds = 0;

        OrderOfTime.forEach((key) => {
            const data = config[key];

            const value = data.value;
            const factor = data.factor;

            // add validation maybe not rn
            totalTimeInMilliseconds += parseInt(value) * factor;
        });
        console.log(totalTimeInMilliseconds);
        // and then start the timer

        timeSpentRef.current = Date.now() + totalTimeInMilliseconds;

        intervalRef.current = setInterval(() => {
            setTime(() => {
                return timeSpentRef.current - new Date().getTime();
            });
        }, 10);
    };
    const handlePause = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
    };
    const handleReset = () => {
        setTime(0);
    };

    const formatTime = () => {
        const ms = Math.floor((time % 1000) / 10);
        const mm = Math.floor((time / (1000 * 60)) % 60);
        const ss = Math.floor((time / 1000) % 60);
        const hh = Math.floor(time / (1000 * 60 * 60));

        return `${hh}:${mm}:${ss}`;
    };
    return (
        <>
            <div>
                <p>{formatTime()}</p>
                {OrderOfTime?.map((element) => {
                    const { factor, placeHolder, value } = config[element];
                    return (
                        <input
                            key={element}
                            value={value}
                            placeholder={placeHolder}
                            onChange={(e) => {
                                handleChange(e, { key: element });
                            }}
                        />
                    );
                })}
            </div>
            <button
                onClick={() => {
                    handleStart();
                }}
            >
                start
            </button>
            <button
                onClick={() => {
                    handlePause();
                }}
            >
                pause
            </button>
            <button
                onClick={() => {
                    handleReset();
                }}
            >
                restart
            </button>
        </>
    );
}

export default App;
