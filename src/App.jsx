import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import { useDispatch, useSelector } from 'react-redux'

function App() {


  return (
    <div>
        <Navbar />
        <button >-</button>
        Currently count is 0
        <button >+</button>
        <button >*</button>
        <button >incrementByAmount</button>
    </div>
  )
}

export default App
