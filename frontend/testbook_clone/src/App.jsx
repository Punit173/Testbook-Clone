import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Courses from './components/Courses'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <About/>
      <Courses/>
    </>
  )
}

export default App
