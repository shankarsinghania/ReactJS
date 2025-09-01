import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1>Custom App !</h1>
    </div>
  )
}
/*
const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google Page
  </a>
)
*/
createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <App />
    
  </StrictMode>
 
  
//  anotherElement
)
