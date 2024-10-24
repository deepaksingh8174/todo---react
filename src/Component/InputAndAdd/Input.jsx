import React, { useRef, useState } from 'react'
import './Input.css'

export  const  Input=({AddToDo})=> {

    const [input, setInput] = useState('')

  return (
    <div className='input-button'>
        <input value={input} type="text" placeholder='Enter your todo...' onChange={(e)=>{setInput(e.target.value)}}/>
        <button className='add-button' onClick={()=>{AddToDo(input); setInput("")}} > add </button>
    </div>
  )
}

