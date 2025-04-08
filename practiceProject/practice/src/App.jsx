import { useState } from "react";
import "./App.css";

function App({ size = 7 }) {
    const [star, setStar] = useState(new Array(size).fill(""));
    const [starValue, setStarValue] = useState(null);
    const [hoverValue, setHoverValue] = useState(null);
    console.log("star", hoverValue);
    const handleClick = (index) => {
        setStarValue(index);
    };
    return (
        <>
            <div className="star-container">
                {star?.map((_, index) => {
                    return (
                        <p
                            onClick={() => handleClick(index + 1)}
                            onMouseEnter={() => {
                                setHoverValue(index + 1);
                            }}
                            onMouseLeave={() => {
                                setHoverValue(0);
                            }}
                            className={
                               (hoverValue === 0 && index < starValue) || index < hoverValue
                                    ? "gold"
                                    : ""
                            }
                        >
                            &#9733;
                        </p>
                    );
                })}
            </div>
        </>
    );
}

export default App;
