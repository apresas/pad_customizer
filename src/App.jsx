import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Customizer from "./components/Customizer/Customizer"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Customizer />
    </>
  )
}

export default App
