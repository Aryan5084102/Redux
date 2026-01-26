import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, multiply, incrementByAmount } from './redux/counter/counterSlice';
import Products from './component/Products';
import Cart from './component/Cart';

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value)

  return (
    <div style={{display: 'flex', flexDirection: 'column', }}>
        <Navbar />
        {/* <button  onClick={() => dispatch(decrement())}>-</button>
        Currently count is {count}
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(multiply())}>*</button>
        <div>
          <button onClick={() => dispatch(incrementByAmount(10))}>
            incrementByAmount
          </button>
        </div> */}
        
        <Products />

        {/* <Cart /> */}
        
    </div>
  )
}

export default App

