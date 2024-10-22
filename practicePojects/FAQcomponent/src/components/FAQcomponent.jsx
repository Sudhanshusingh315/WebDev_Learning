import { useState } from 'react'
import './style.css'
export default function FAQcomponent({element,index}){
    const [isShow, setShow] = useState(false);
    const handleFAQ = () =>{
        setShow((isShow)=>!isShow);
    }
    return(
        <div className="container">
            <div className="question-box">
            <button onClick={()=>{handleFAQ()}} className={isShow ? 'active':""}>&gt;</button>
            <div className=''>{element?.question}</div>
            </div>
            {isShow && <div >{element?.answer}</div>}
        </div>
    )
}