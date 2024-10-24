import React from 'react'
import './ToDoList.css'
import crossIcon from '../../assets/icon-cross.svg'
import completedItemTick from '../../assets/icon-check.svg'




function ToDoList(props) {

    console.log(props)

    let todo = []

    switch (true) {
      case props.status == "all": {
        todo = props.ToDoList;
        break;
      }
      case props.status == "active":{
        todo = props.ToDoList.filter((val) => !val.isCompleted)
        break;
      }
      case props.status == "completed": {
        todo = props.ToDoList.filter((val) => val.isCompleted)
        break;
      }
      case props.status == "clear-completed": {
         todo = props.ToDoList.filter((val) => !val.isCompleted)
         localStorage.setItem('todo' , JSON.stringify(todo))
         props.setToDoList(todo)
         props.setStatus('')
      }
      default: {
        todo = props.ToDoList
      }

    }

    function  markCompleted(id) {
      const todo = props.ToDoList.map((val) => val.id == id? {...val , isCompleted : !val.isCompleted}: val)
      console.log(props.ToDoList)
      console.log(id)
      console.log(todo)
      localStorage.setItem('todo' , JSON.stringify(todo))
      props.setToDoList(todo)
      // props.setStatus('')
    }





 
  return (
    <div className='todo'>
        <ul>
           {
            todo.map((val, index) => {
               return  <li key = {val.id} className='list-item'>
                 <div className='todo-name'>
                 <button className={val.isCompleted?'status-button completed':'status-button'} onClick={() => markCompleted(val.id)} >
                 </button>
                 <p>{val.value} </p>
                 </div>
                 {!val.isCompleted ? <img className = "cross-image" src = {crossIcon} alt="cross image" />: '' }
                 </li> 
            })
        }
        </ul>
    </div>
  )
}

export default ToDoList

