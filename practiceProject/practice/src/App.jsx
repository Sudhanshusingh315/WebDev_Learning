import { useEffect, useState } from "react";
import "./App.css";
import PhotoControl from "./PhotoControl";

function App() {
    const [photos, setPhotos] = useState(null);
    const [pageNo, setPageNo] = useState(1);
    useEffect(() => {
        fetch(`https://picsum.photos/v2/list?page=${pageNo}&limit=5`)
            .then((res) => res.json())
            .then((res) => {
                console.log("final response", res);
                setPhotos(res);
            });
    }, [pageNo]);

    return (
        <>
            <div className="photoGrid">
                {photos?.map(({ id, download_url }) => {
                    return (
                        <img key={id} src={download_url} alt="photo-gallery" />
                    );
                })}
            </div>
            {/* photos control */}
            <PhotoControl pageNo={pageNo} setPageNo={setPageNo} />
        </>
    );
}

export default App;
