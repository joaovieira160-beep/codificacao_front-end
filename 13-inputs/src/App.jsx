import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Demo from './pages/Demo'
import Pneu from './pages/Pneu'
import Hoho from './pages/Hoho'
import CNA from './pages/CNA'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div className="app">
    <Home/>
    <Demo/>
    <Pneu/>
    <Hoho/>
    <CNA/>
  </div>
  )
}

export default App
