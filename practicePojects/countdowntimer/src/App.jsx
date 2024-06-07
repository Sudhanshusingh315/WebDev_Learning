import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {
  const [isStart, setStart] = useState(false);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timerId,setTimerId] = useState(0)
  const handleStart = () => {
    setStart(true);
  }
  const handleReset = () => {
    setStart(false);
  }
  
  const runTimer = (sec,min,hr, tid) =>{
    if(sec>0){
      setSeconds((s)=>s-1)
    }else if(sec===0 && min>0){
      setMinute((m)=> m-1);
      setSeconds(59);
    }else{
      setHour((h)=>h-1);
      setMinute(59);
      setSeconds(59);
    }
  }

  useEffect(() => {
    let tid;
    if (isStart) {
      tid = setInterval(() => {
        runTimer(seconds,minute,hour,tid);
      }, 1000)
      setTimerId(tid);
   }
   return ()=>{clearInterval(tid)};
}, [isStart, hour, minute, seconds])
return (
  <>
    <h1>Contdown timer</h1>
    {
      !isStart &&
      (<div>
        <input type="text" name="hour" placeholder='HH' onChange={(e) => { setHour(() => { return +(e.target.value) }) }} />
        <input type="text" name='minute' placeholder='MM' onChange={(e) => { setMinute(() => { return +(e.target.value) }) }} />
        <input type="text" name='seconds' placeholder='SS' onChange={(e) => { setSeconds(() => { return +(e.target.value) }) }} />
        <button onClick={() => { handleStart() }}>Start</button>
      </div>)
    }
    {
      isStart && (
        <div>
          <span>{hour}</span>
          <span>:</span>
          <span>{minute}</span>
          <span>:</span>
          <span>{seconds}</span>
          <div>
            <button>Pause</button>
            <button onClick={() => { handleReset() }}>Reset</button>
          </div>
        </div>)
    }
  </>
)
}

export default App
