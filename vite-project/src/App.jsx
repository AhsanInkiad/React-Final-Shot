import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Counter } from './components/Counter'
import { KeyProp1 } from './key props/KeyProp1'
import { KeyProp2 } from './key props/KeyProp2'

function App() {
  const [isKyle, setIsKyle] = useState(true)
  const [isKyle1, setIsKyle1] = useState(true)
  const [isKyle2, setIsKyle2] = useState(true)

  return (
    <>
      <KeyProp1></KeyProp1>
      <KeyProp2></KeyProp2>
    </>
  )
}

export default App
