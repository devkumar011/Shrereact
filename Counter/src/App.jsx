import React, { useState } from 'react' 

//batch method
const App = () => {
  const [num, setNum] = useState(10)

  const btnClicked = () =>{
    setNum(prev =>(prev+1))
    setNum(prev =>(prev+1))
    setNum(prev =>(prev+1))
    //yha 3 prev sath kam krenge mtlvv ki  +3 hoga  
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnClicked}>click</button>
    </div>
  )
}
export default App









/*const App = () => {


  const [num,setNum] = useState(0)
  function increaseNum(){
    setNum(num + 1)
  }
  function decreaseNum(){
    setNum(num - 1)
  }
  function jump5Num(){
    setNum(num + 5)
  }

    return (
    <div >
      <h1>{num}</h1>
      <button onClick={increaseNum}>Increase</button>
      <button onClick={decreaseNum}>Decrease</button>
      <button onClick={jump5Num}>Jump 5</button>
    </div>
  )
}



export default App
*/