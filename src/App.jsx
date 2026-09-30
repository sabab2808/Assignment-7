import { useState } from 'react'
import './App.css'
import navbar from './components/navbar'
import banner from './components/banner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Home />
    </div>
  )
}

export default App
