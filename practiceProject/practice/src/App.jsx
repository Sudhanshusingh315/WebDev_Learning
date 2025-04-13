import { useState } from "react";
import "./App.css";
import userPassword from "./userPassword";
export default function App() {
    const [value, setValue] = useState(4);
    const [checkBoxData, setCheckBoxData] = useState([
        { title: "Include uppercase letters", state: false },
        { title: "Include lowercase letters", state: false },
        { title: "Include numbers", state: false },
        { title: "Include symbols", state: false },
    ]);

    const { password, generatePassword, errorMessage } = userPassword();

    const handleCheckBoxes = (e, index) => {
        console.log("wokring");
        e.preventDefault();
        setCheckBoxData((prev) => {
            const newData = [...prev];
            newData[index] = {
                ...newData[index],
                state: !newData[index].state,
            };
            return newData;
        });
    };

    const handleRangeValue = (e) => {
        setValue(e.target.value);
    };
    console.log("state of checkbox", checkBoxData);
    return (
        <div className="container">
            {/* password text and copy button */}
            <div className="header">
                <p>7HrT4#</p>
                <button>copy</button>
            </div>
            {/* character lenght sliger */}
            <div className="char-len">
                <div className="char-len-info">
                    <p>character lengh</p>
                    <p>{value}</p>
                </div>
                <input
                    min={4}
                    max={20}
                    type="range"
                    value={value}
                    onChange={handleRangeValue}
                />
            </div>
            {/* checkboxes */}
            <div className="checkbox">
                {checkBoxData?.map(({ title, state }, index) => {
                    return (
                        <div className="hehe" key={index}>
                            <input
                                type="checkbox"
                                checked={state}
                                onChange={(e) => {
                                    handleCheckBoxes(e, index);
                                }}
                            />
                            <p>{title}</p>
                        </div>
                    );
                })}
            </div>
            {/* generate button */}
            <button
                onClick={() => {
                    generatePassword(checkBoxData, value);
                }}
            >
                Generate button
            </button>
        </div>
    );
}
