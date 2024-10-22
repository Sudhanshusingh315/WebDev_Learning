import { Fragment } from 'react'
import './App.css'
import FAQcomponent from './components/FAQcomponent'

function App() {
  const data =[
    {
      question: "How many bones does a cat have?",
      answer: "A cat has 230 bones - 6 more than a human",
    },
    {
      question: "How much do cats sleep?",
      answer: "The average cat sleeps 12-16 hours per day",
    },
    {
      question: "How long do cats live",
      answer: "Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.",
    },
  ]
  
  return (
    <>
    <h1>FAQ Component</h1>
    <div>
      {
        data.map((element,index)=>{
          return <Fragment key={`numner-${index}`}><FAQcomponent element={element} index={index} /></Fragment> 
        })
      }
    </div>
    </>
  )
}

export default App
