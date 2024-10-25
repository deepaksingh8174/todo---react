import './App.css'
import { useEffect, useState } from 'react'
import Footer from './Component/Footer/Footer'
import {Input} from './Component/InputAndAdd/Input'
import ToDoList from './Component/ToDoList/ToDoList'

function App() {

  const[todoList, SettodoList] = useState([])
  const[activeToDoCount, setActiveToDoCount] = useState(0)
  const[todoStatus, SettodoStatus] = useState("")

  useEffect(() => {
      const todo = JSON.parse(localStorage.getItem('todo')) || [];
      SettodoList(todo) 
  }, [])
  

  useEffect(() => {
    const count = todoList.reduce((currval, value) =>  !value.isCompleted? currval +1 : currval + 0 , 0)
    setActiveToDoCount(count)
  }, [todoList])



  const generateUniqueId = () => {
    return `${Date.now()}-${Math.floor(Math.random() * 10000)}`;
}



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

        <ToDoList  ToDoList = { todoList} status = {todoStatus}  setToDoList = {SettodoList}  setStatus = {SettodoStatus}/>

        <Footer count = {activeToDoCount} setStatus = {SettodoStatus} status = {todoStatus}/>

        </div>

      </div>
      
    </>
  )
}

export default App

