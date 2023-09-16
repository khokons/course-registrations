/* eslint-disable no-unused-vars */
import { useState } from 'react'

import './App.css'
import Home from './Components/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-4xl text-center mt-5 font-bold text-[#1C1B1B]'>Course Registration</h1>
      <Home></Home>
    </>
  )
}

export default App

