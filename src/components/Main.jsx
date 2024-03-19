import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset,incrementByAmount } from '../redux/counterSlice'


function Main() {
        const dispatch = useDispatch()
        const count = useSelector((state)=>state.counter.count)
        const[amount,setAmount]=useState("")

        const handleIncrement= ()=>{
          if(amount==""){
            alert("please enter a value")
          }
          else{
            //update state in store
            dispatch(incrementByAmount(Number(amount)))
          }
        }
  
  return (
    <div style={{height:'70vh'}} className='w-100 d-flex justify-content-center align-items-center'>
    <div className='d-flex justify-content-center align-items-center border rounded p-5 w-50 flex-column'>
      <h1><strong>Counter App</strong></h1>
      <h1 style={{fontSize:'100px'}}>{count}</h1>
      <div>
        <button className='btn btn-primary ' onClick={()=>dispatch(increment())}>Increment</button>
        <button  className='btn btn-danger ' onClick={()=>dispatch(decrement())}>Decrement</button>
        <button  className='btn btn-white ' onClick={()=>dispatch(reset())}>Reset</button>

      </div>
      <div className="d-flex mt-5">
        <input onChange={e=>setAmount(e.target.value)} type="text"className='form-control'placeholder='enter amount ' />
        <button onClick={handleIncrement} className='btn btn-primary ms-3'>Increment Amount</button>
      </div>
      </div>
      
    </div>
  )
}

export default Main