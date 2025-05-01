import { useState, useRef, use, useEffect } from "react";
import "./App.css";

const IMAGES = [
    "https://images.unsplash.com/photo-1735767976699-6096acda642d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1735732519861-3b67d0aee297?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1736894739274-3e85a224f350?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1736878363865-ae21e0290d8c?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1734640113825-24dd7c056052?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];
function App() {
    const [image, setImgage] = useState(structuredClone(IMAGES));
    const [index, setIndex] = useState(0);
    const handleNext = () => {
        console.log(index);
        if (index === image.length - 1) {
            console.log("im inside");
            setIndex(0);
            return;
        }
        setIndex((prev) => prev + 1);
    };
    const handlePrev = () => {
        if (index === 0) {
            setIndex(image.length - 1);
            return;
        }
        setIndex((prev) => prev - 1);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 1000);

        return () => clearInterval(interval);
    }, [handleNext]);

    return (
        <div className="container">
            <div className="carousel-container">
                {image?.map((url) => {
                    return (
                        <img
                            src={url}
                            key={url}
                            style={{
                                translate: `${-100 * index}%`,
                            }}
                        />
                    );
                })}
            </div>

            <button onClick={handleNext}>N</button>
            <button onClick={handlePrev}>P</button>
        </div>
    );
}

export default App;
