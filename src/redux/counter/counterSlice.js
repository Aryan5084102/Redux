import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0
}

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) =>{
      state.value += 1;
    },
    
    decrement: (state) =>{
      state.value -= 1;
    },
    
    multiply: (state) =>{
      state.value *= 4;
    },

    incrementByAmount: (state, action) =>{
      state.value *= action.payload
    },

  }
})

export const {increment, decrement, multiply, incrementByAmount} = counterSlice.actions

export default counterSlice.reducer

