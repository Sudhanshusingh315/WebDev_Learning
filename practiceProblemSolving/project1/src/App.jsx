import './App.css'
import { AiFillAccountBook } from "react-icons/ai";

function App() {
  return (
    <>
    <div className='container header'>
      <div className='navigation-info-left'>
        <AiFillAccountBook className='logo'/>
        <p>Live</p>
        <p>Push</p>
        <p>Move</p>
        <p>Note</p>
        <p>Link</p>
        <p>Shop</p>
        <p>Pack</p>
        <p>Help</p>
      </div>
      <div className='navigation-info-right'>
        <p className='navigation-different'>Try Live For Free</p>
        <p>Account</p>
        <p>Log out</p>
      </div>
    </div>

    {/* Main section */}

    <div className='main-one-container'>
      <img src="https://ableton-production.imgix.net/about/header.jpg?auto=format&dpr=2&fit=crop&fm=jpg&h=729&ixjsv=1.1.3&q=50&w=1168" alt=" man sitting on the chair" />
      <div className='main-one-container-title'>Ableton</div>
    </div>


    <div className='main-two-container'>
      <p className='main-two-container-heading'>We make <span>Live</span>, <span>Push</span>, <span>Note</span> and Link — unique software and hardware for music creation and performance. With these products, our community of users creates amazing things.</p>
      <p className='main-two-container-text'>Ableton was founded in 1999 and released the first version of Live in 2001. Our products are used by a community of dedicated musicians, sound designers, and artists from across the world.</p>
    </div>


    <div className='main-three-container'>

    </div>
    </>
  )
}

export default App
