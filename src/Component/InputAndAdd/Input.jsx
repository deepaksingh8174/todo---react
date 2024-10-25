import React, { useRef, useState } from 'react'
import './Input.css'

export  const  Input=({AddToDo})=> {

    const [input, setInput] = useState('')


  const clickAddButton = () => {
    AddToDo(input)
    setInput("")
   }

   const clickEnterButton = (e) => {
      console.log(e.key)
      if (e.key === 'Enter') {
        AddToDo(input)
        setInput("")
      } 
   }

  return (
    <div className='input-button'>
        <input value={input} type="text" placeholder='Enter your todo...' onChange={(e)=>{setInput(e.target.value)}}  onKeyDown= {(e) => clickEnterButton(e)}/>
        <button className='add-button' onClick={clickAddButton} > Add </button>
    </div>
  )
}

