import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    const fetchWithAbort = (url, duration) => {
        return new Promise((resolve, reject) => {
            let timerId = null;
            const controller = new AbortController();
            let signal = controller.signal;
            fetch(url, { signal })
                .then((res) => res.json())
                .then((res) => {
                    clearTimeout(timerId);
                    resolve(res);
                })
                .catch((err) => {
                    console.log("error occured in the api call");
                    reject(err);
                });

            timerId = setTimeout(() => {
                console.log(
                    "Aborted because api couldn't be completed within time limit"
                );
                controller.abort();
            }, duration);
        });
    };

    const handleApi = () => {
        const url = "https://jsonplaceholder.typicode.com/todos/1";
        fetchWithAbort(url, 300)
            .then(() => {
                console.log("successfullly called the api");
            })
            .catch((err) => {
                console.log("err", err);
                console.log("Api call failed");
            });
    };

    return (
        <>
            <div className="card">
                <button
                    onClick={() => {
                        handleApi();
                    }}
                >
                    Make the api call
                </button>
            </div>
        </>
    );
}

export default App;
