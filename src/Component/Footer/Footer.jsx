import React from 'react'
import './Footer.css'

function Footer({count, setStatus}) {


  return (
    <div className='footer'>
          <p> {count} items left</p>
          <div className='middle-footer'>
            <p className='todo-status' onClick={() => setStatus("all")}>All</p>
            <p className='todo-status' onClick={() => setStatus("active")}>Active</p>
            <p className='todo-status' onClick={() => setStatus("completed")}>Completed</p>
          </div>

          <p className='todo-status' onClick = {() => setStatus("clear-completed")}>Clear Completed</p>

        </div>
  )
}

export default Footer