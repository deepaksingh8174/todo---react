import React, { useRef, useState } from 'react'
import './Input.css'
import AddTodo from './AddToDo'

export  const  Input=()=> {

    const [input, setInput] = useState('')
    console.log(input)

  return (
    <div className='input-button'>
        <input value={input} type="text" placeholder='Enter your todo...' onChange={(e)=>{setInput(e.target.value)}}/>
        <button className='add-button' onClick={()=>{AddTodo(input); setInput("")}} > add </button>
    </div>
  )
}

