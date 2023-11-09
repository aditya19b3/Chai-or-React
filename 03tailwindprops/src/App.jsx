import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Aditya",
    age: 21
  }

  let newArr = [1,2,3]

  return (
    <>
      <h1 className='bg-green-500 text-black p-4 rounded-xl'>Tailwind test</h1>
      <Card />
      <Card userName="ChaiOrCode" someObj={myObj} />
      <Card newObj = {newArr} />
    </>
  )
}

export default App
