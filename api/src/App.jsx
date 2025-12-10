import React from 'react'
import axios from 'axios'
const App = () => {
function getData(){
  console.log("Hello World"); 
}

  return (
    <div>
      <button  onClick={getData}>Click me</button>
    </div>
  )
}

export default App
