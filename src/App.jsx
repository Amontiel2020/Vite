import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Test from './components/Test'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
  <Test/>
    </div>
  )
}

export default App
