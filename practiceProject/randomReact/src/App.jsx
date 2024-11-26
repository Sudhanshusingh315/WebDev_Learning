import { useState } from 'react'
import './App.css'
function App() {
  const [counter,setCoutner] = useState(0);

  return (
    <>
      <div>Tracker</div>
      <h1>Counter:{counter}</h1>
      <button onClick={()=>{}}>Start</button>
    </>

  )
}

export default App
