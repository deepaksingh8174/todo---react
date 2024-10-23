import React from 'react'
import './ToDoList.css'
import crossIcon from '../../assets/icon-cross.svg'




function ToDoList() {

    let todo = JSON.parse(localStorage.getItem('todo'))
    if (todo == null) {
        todo = []
    }
    console.log(todo)

  return (
    <div className='todo'>
        <ul>
           {
            todo.map((val, index) => {
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

