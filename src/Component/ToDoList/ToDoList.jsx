import React from 'react'
import './ToDoList.css'
import crossIcon from '../../assets/icon-cross.svg'




function ToDoList({ToDoList}) {

    

  return (
    <div className='todo'>
        <ul>
           {
            ToDoList.map((val, index) => {
               return  <li key = {val.id} className='list-item'>
                 <div className='todo-name'>
                 <button className='status-button'></button>
                 <p>{val.value} </p>
                 </div>
                 <img className = "cross-image" src = {crossIcon} alt="cross image" />
                 </li> 
            })
        }
        </ul>
    </div>
  )
}

export default ToDoList

