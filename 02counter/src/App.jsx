import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App () {
   
  let [counter,setCounter] = useState(0)
  let addValue = () => {
    //counter = counter +1
    if(counter<20){
       setCounter(counter +1)
    }
    
    
  }

  let removeValue = () => {
    if(counter>0) {
      setCounter(counter-1)
    }
  }
   
  //let counter = 15 
  return (
    <>
    <h1>Hello Chai With React |SK</h1>
    <h3>Counter Value : {counter}</h3>
    <button onClick={addValue}>Add counter : {counter}</button>
    <br />
    <button onClick={removeValue}>remove counter : {counter}</button>
    <p>footer : {counter}</p>
    </>
  )
}
export default App
