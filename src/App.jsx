import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { reverseArray } from './js/Practise'
import ArraySorting from './components/ArraySorting'

function App() {
  const [reversed, setReversed] = useState([]) 
  const a = [1, 2, 3, 4, 5];

  useEffect(() => {
    const b = reverseArray([...a]);  
    console.log(b, "Reversed Array");
    setReversed(b);
  }, [])

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <div className="card">
        <p>Reversed Array: {reversed.join(", ")}</p>
        <ArraySorting />
      </div>
    </>
  )
}

export default App
