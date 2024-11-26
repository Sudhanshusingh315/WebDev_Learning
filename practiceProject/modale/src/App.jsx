import { useState } from 'react'
import './App.css'
import Model from './components/Model'

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () =>{
    setIsOpen(!isOpen);
  }
  return (
    <>
    {
      isOpen ? (

      <Model />
      ) : (
        ""
      )
    }
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam odio praesentium laborum dignissimos esse reiciendis incidunt corrupti aut. Ipsum corporis a at modi fugiat molestiae autem dolorem rerum mollitia rem.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam odio praesentium laborum dignissimos esse reiciendis incidunt corrupti aut. Ipsum corporis a at modi fugiat molestiae autem dolorem rerum mollitia rem.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam odio praesentium laborum dignissimos esse reiciendis incidunt corrupti aut. Ipsum corporis a at modi fugiat molestiae autem dolorem rerum mollitia rem.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam odio praesentium laborum dignissimos esse reiciendis incidunt corrupti aut. Ipsum corporis a at modi fugiat molestiae autem dolorem rerum mollitia rem.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam odio praesentium laborum dignissimos esse reiciendis incidunt corrupti aut. Ipsum corporis a at modi fugiat molestiae autem dolorem rerum mollitia rem.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam odio praesentium laborum dignissimos esse reiciendis incidunt corrupti aut. Ipsum corporis a at modi fugiat molestiae autem dolorem rerum mollitia rem.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam odio praesentium laborum dignissimos esse reiciendis incidunt corrupti aut. Ipsum corporis a at modi fugiat molestiae autem dolorem rerum mollitia rem.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam odio praesentium laborum dignissimos esse reiciendis incidunt corrupti aut. Ipsum corporis a at modi fugiat molestiae autem dolorem rerum mollitia rem.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam odio praesentium laborum dignissimos esse reiciendis incidunt corrupti aut. Ipsum corporis a at modi fugiat molestiae autem dolorem rerum mollitia rem.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam odio praesentium laborum dignissimos esse reiciendis incidunt corrupti aut. Ipsum corporis a at modi fugiat molestiae autem dolorem rerum mollitia rem.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam odio praesentium laborum dignissimos esse reiciendis incidunt corrupti aut. Ipsum corporis a at modi fugiat molestiae autem dolorem rerum mollitia rem.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam odio praesentium laborum dignissimos esse reiciendis incidunt corrupti aut. Ipsum corporis a at modi fugiat molestiae autem dolorem rerum mollitia rem.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam odio praesentium laborum dignissimos esse reiciendis incidunt corrupti aut. Ipsum corporis a at modi fugiat molestiae autem dolorem rerum mollitia rem.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam odio praesentium laborum dignissimos esse reiciendis incidunt corrupti aut. Ipsum corporis a at modi fugiat molestiae autem dolorem rerum mollitia rem.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam odio praesentium laborum dignissimos esse reiciendis incidunt corrupti aut. Ipsum corporis a at modi fugiat molestiae autem dolorem rerum mollitia rem.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam odio praesentium laborum dignissimos esse reiciendis incidunt corrupti aut. Ipsum corporis a at modi fugiat molestiae autem dolorem rerum mollitia rem.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam odio praesentium laborum dignissimos esse reiciendis incidunt corrupti aut. Ipsum corporis a at modi fugiat molestiae autem dolorem rerum mollitia rem.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam odio praesentium laborum dignissimos esse reiciendis incidunt corrupti aut. Ipsum corporis a at modi fugiat molestiae autem dolorem rerum mollitia rem.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam odio praesentium laborum dignissimos esse reiciendis incidunt corrupti aut. Ipsum corporis a at modi fugiat molestiae autem dolorem rerum mollitia rem.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam odio praesentium laborum dignissimos esse reiciendis incidunt corrupti aut. Ipsum corporis a at modi fugiat molestiae autem dolorem rerum mollitia rem.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam odio praesentium laborum dignissimos esse reiciendis incidunt corrupti aut. Ipsum corporis a at modi fugiat molestiae autem dolorem rerum mollitia rem.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam odio praesentium laborum dignissimos esse reiciendis incidunt corrupti aut. Ipsum corporis a at modi fugiat molestiae autem dolorem rerum mollitia rem.</div>
      <button onClick={()=>{handleOpen()}}>{isOpen ? "Close":"Open"}</button>
    </>
  )
}

export default App
