import { useState } from 'react'
import './App.css'

function App() {
  const [todo, setTodo] = useState([]);
  const [counter,setCoutner] = useState(0); 
  const [input, setInput] = useState("");
  const addItemstotheList = () => {
    let newValue = {
      id: Number(counter),
      liValue : input
    }
    setTodo((perv)=>{return [...perv,newValue]});
    setCoutner((prev)=>prev+1);
    setInput("");
  } 
  return (
    <>
      <h1>To do list</h1>
      <input type='text' name='inputeValue' value={input} placeholder='enter an item here' onChange={(e) => { setInput(e.target.value) }} />
      <button onClick={() => { addItemstotheList() }}>Add me</button>
      <div>
        {counter>0 && todo.map((items,index)=>{
          return <li key={`key-${index}`}>{items.liValue}</li>
        })}
      </div>

      <form onClick={()=>{alert("i'm form")}}>
        what is this?

        <div onClick={()=>{alert("i'm a div")}}>
          i'm a div
        </div>
      </form>
    </>
  )
}

export default App
