import { useEffect } from "react";
import "./App.css";
import { useState } from "react";
import { useRef } from "react";
import Photos from "./Photos";

function App() {
    const [imageData, setImagesData] = useState(null);
    const [pageNo, setPageNo] = useState(1);
    useEffect(() => {
        fetch(`https://picsum.photos/v2/list?page=${pageNo}&limit=10`)
            .then((res) => res.json())
            .then((data) => {
                setImagesData(data);
            });
    }, []);

    return (
        <>
            <Photos imageData={imageData} setImagesData={setImagesData} />
        </>
    );
}

export default App;
