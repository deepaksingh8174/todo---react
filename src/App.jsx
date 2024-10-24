import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect, useState } from 'react'
import Footer from './Component/Footer/Footer'
import {Input} from './Component/InputAndAdd/Input'
import ToDoList from './Component/ToDoList/ToDoList'

function App() {

  const[todoList, SettodoList] = useState([])
  const[activeToDoCount, setActiveToDoCount] = useState(0)

  useEffect(() => {
      const todo = JSON.parse(localStorage.getItem('todo')) || [];
      SettodoList(todo)
      
      
  }, [])

  useEffect(() => {
    let count = 0;
    todoList.forEach((val) => {
    if(val.isCompleted === false) {
       count = count +1;
    }
    })
    console.log(count)
    setActiveToDoCount(count)
    console.log(activeToDoCount)
  }, [SettodoList])




  const generateUniqueId = () => {
    return `${Date.now()}-${Math.floor(Math.random() * 10000)}`;
};



  const AddTodo = (val) => {
    const todoObject = {
        id : generateUniqueId(),
        value : val,
        isCompleted : false
    }
    if (val != "") {
        const updatedTodo = [...todoList, todoObject]
        SettodoList(updatedTodo)
        localStorage.setItem('todo', JSON.stringify(updatedTodo))
    } 
}

  
  
  return (
    <>
      <div className='body-content'>

        <div className='content'>

        <h1>TODO</h1>

        <Input  AddToDo = {AddTodo}/>

        <ToDoList  ToDoList ={ todoList}/>

        <Footer ToDoList ={ todoList}/>

        </div>

      </div>
      
    </>
  )
}

export default App

