import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
//  let counter = 500 
let [counter, setCounter] = useState(15)

  const addValue = () => {
   // console.log("Added",counter);
    //counter = counter + 1;
    
    if(counter < 20) {
      setCounter(counter + 1)
    } else {
      console.log("Can not print after 20")
    }
  }

  const removeValue = () => {
   // console.log("Removed");
   setCounter(counter - 1)
    if(counter <= 0) {
      console.log("Can not print before 0")
    }

    
  }
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}>Add Value {counter} </button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>footer : {counter} </p>
    </>
  )
}

export default App
