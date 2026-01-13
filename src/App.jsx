import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, multiply } from './redux/counter/counterSlice'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  console.log(count)

  return (
    <div>
        <Navbar />
        <button onClick={() => dispatch(decrement())}>-</button>
        Currently count is {count}
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(multiply())}>*</button>
        <button onClick={() => dispatch(incrementByAmount(10))}>incrementByAmount</button>
    </div>
  )
}

export default App
