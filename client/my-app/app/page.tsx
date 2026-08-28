import { useState } from "react"

export default function Home() {
  const[counter, setCounter] = useState(0);
  
  return <>
  <div className="flex flex-col items-center justify-center h-screen">
    <h1>Counter: {counter}</h1>
    <button onClick={() => setCounter(counter + 1)}>Increment</button>
    <button onClick={() => setCounter(counter - 1)}>Decrement</button>
  </div>
  </>
}
