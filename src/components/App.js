import React from 'react'

const App = () => {
  const [counter, setCounter] = React.useState(0)

  return (
    <div>Hello World! This is my custom React APP!
      <br />
      Counter: {counter}
      <br />
      <button onClick={() => setCounter(prevState => prevState += 1)}>Increment</button>
    </div>
  )
}

export default App