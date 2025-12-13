import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const myRefs = useRef([]);
  useEffect(() => {
    fetch(`https://picsum.photos/v2/list?page=${page}&limit=4`)
      .then((res) => res.json())
      .then((res) => {
        setData((oldData) => {
          return [...oldData, ...res];
        });
      });
  }, [page]);

  console.log("my refs", myRefs.current);

  useEffect(() => {
    const observer = new IntersectionObserver((param) => {
      console.log("this is params", param);
      if (param[0].isIntersecting) {
        setPage((oldPage) => {
          return oldPage + 1;
        });
      }
    });
    if (!myRefs.current.length) return;
    observer.observe(myRefs.current.at(-1));
  }, [data]);

  return (
    <>
      <h1>Infinite Scroll test</h1>
      <div className="container">
        {data?.map(({ download_url }, index) => {
          return (
            <img
              key={index}
              ref={(el) => {
                myRefs.current[index] = el;
              }}
              src={download_url}
              alt=""
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
