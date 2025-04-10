import { useState } from "react";
import "./App.css";
export default function Step({ list }) {
    // list is going to be array of elements
    const [currentStep, setCurrentStep] = useState(0);
    const stepsCount = list.length;
    // going to make the top bar indicators
    const steps = [];
    const progressBarLength = (100 / (list.length - 1)) * currentStep;
    for (let i = 0; i < stepsCount; i++) {
        // these are going to be the steps
        const element = <div key={i}>{i + 1}</div>;
        steps.push(element);
    }
    const handleSteps = (index) => {
        setCurrentStep(index);
    };
    console.log("progress length", progressBarLength);
    return (
        <div className="wrapper">
            <div className="steps">
                {steps?.map((element, index) => {
                    return (
                        <div
                            className={`${
                                index <= currentStep ? "step meow" : "step"
                            }`}
                            onClick={() => handleSteps(index)}
                        >
                            {element}
                        </div>
                    );
                })}
                <div
                    className="progess-bar"
                    style={{
                        width: `${progressBarLength}%`,
                    }}
                ></div>
            </div>
            <div>{list[currentStep]}</div>
        </div>
    );
}
