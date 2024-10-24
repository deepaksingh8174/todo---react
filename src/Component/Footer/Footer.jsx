import React from 'react'
import './Footer.css'

function Footer({ToDoList}) {

  return (
    <div className='footer'>
          <p> 0 items left</p>
          <div className='middle-footer'>
            <p className='todo-status' onClick={() => FilterTodo(ToDoList)} >All</p>
            <p className='todo-status' >Active</p>
            <p className='todo-status' >Completed</p>
          </div>

          <p className='todo-status' >Clear Completed</p>

        </div>
  )
}

export default Footer