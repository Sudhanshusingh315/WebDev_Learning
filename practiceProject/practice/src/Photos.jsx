import { useEffect, useRef } from "react";
import "./App.css";
export default function Photos({ imageData, setImagesData }) {
    console.log("images data", imageData);
    const imagesRef = useRef([]);
    console.log("images ref", imagesRef);
    useEffect(() => {
        const observer = new IntersectionObserver(
            (params) => {
                console.log(params);
            },
            {
                rootMargin: "0px 0px 50px 0px",
                threshold: 0,
            }
        );
        if (imagesRef.current.length) {
            observer.observe(imagesRef.current[imagesRef.current.length - 1]);
        }
    }, [imageData]);

    return (
        <div className="infinitescroll">
            {imageData?.map(({ download_url }, index) => {
                return (
                    <img
                        key={index}
                        ref={(currentRef) => {
                            imagesRef.current[index] = currentRef;
                        }}
                        src={download_url}
                        className="test"
                    />
                );
            })}
        </div>
    );
}
