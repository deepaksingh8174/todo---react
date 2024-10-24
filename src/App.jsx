import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect, useState } from 'react'
import Footer from './Component/Footer/Footer'
import {Input} from './Component/InputAndAdd/Input'
import ToDoList from './Component/ToDoList/ToDoList'

function App() {

  const[todoList, SettodoList] = useState([])

  useEffect(() => {
      const todo = JSON.parse(localStorage.getItem('todo')) || [];
      SettodoList(todo)
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

        <Footer />

        </div>

      </div>
      
    </>
  )
}

export default App

