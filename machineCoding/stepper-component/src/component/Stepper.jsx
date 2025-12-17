import { useState } from "react";

export default function Stepper({ list = [1, 2, 3, 4] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // list take the array of component
  const steps = [];
  for (let i = 0; i < list.length; i++) {
    steps.push(i + 1);
  }
  const progressBar = (100 / (list.length - 1)) * currentIndex;
  return (
    <>
      <div className="stepper-container">
        <div className="steps">
          {steps.map((element, index) => {
            return (
              <div
                key={index}
                className={
                  currentIndex >= index
                    ? "stepper-stage active"
                    : "stepper-stage"
                }
              >
                {element}
              </div>
            );
          })}
        </div>
        <div
          className="stepper-line"
          style={{
            width: `${progressBar}%`,
          }}
        ></div>
      </div>
      <button
        onClick={() => {
          setCurrentIndex((prevCounter) => {
            return prevCounter + 1;
          });
        }}
      >
        Next
      </button>
    </>
  );
}
