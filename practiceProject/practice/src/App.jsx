import { useState } from "react";
import "./App.css";
import data from "./data.json";

function App() {
    console.log("data", data);
    const [show, setShow] = useState();
    const handleAccordian = (index) => {
        setShow(index);
    };
    return (
        <div className="wrapper">
            {data?.map(({ question, answer }, index) => {
                return (
                    <div
                        className="accordian"
                        onClick={() => {
                            handleAccordian(index);
                        }}
                        key={index}
                    >
                        <div className="title">
                            <h3>{question}</h3>
                            <span>+</span>
                        </div>

                        {index === show && (
                            <div className="content">
                                <p>{answer}</p>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}

export default App;
