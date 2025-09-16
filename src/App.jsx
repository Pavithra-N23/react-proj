import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { reverseArray } from './js/Practise'

function App() {
  const [count, setCount] = useState(0)
  let a = [1,2,3,4,5];
  const [reversed, setReversed] = useState([]) 
  useEffect(()=> {
 const b = reverseArray([...a]);  
  console.log(b, "g");
   setReversed(b);
  }, [])

  return (
    <>
      <div>
        {/* <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a> */}
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          {/* Edit <code>src/App.jsx</code> and save to test HMR */}
          {/* hello pavithra */}
          {reversed}
        </p>
      </div>
      <p className="read-the-docs">
        dinesh hanumanthu
      </p>
    </>
  )
}

export default App
