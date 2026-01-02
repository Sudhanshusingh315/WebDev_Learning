import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const socketRef = useRef(null);
  const [message, setMessage] = useState([]);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080");
    socketRef.current = socket;

    socket.onopen = () => {
      console.log("Connected Websockets");
    };

    socket.onclose = () => {
      console.log("socket closed");
    };

    socket.onmessage = (message) => {
      console.log("Recieved message:", message);
    };


    return()=>{
      socket.close();
    }
  }, []);
  return (
    <>
      <h1>hello</h1>
    </>
  );
}

export default App;
