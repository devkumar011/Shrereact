import React from 'react'

const App = () => {

  const handleSubmit = () => {
    
    console.log('Form submitted');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter Your name" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
