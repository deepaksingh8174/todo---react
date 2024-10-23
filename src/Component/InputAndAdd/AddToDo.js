import { useEffect, useState } from "react"


const generateUniqueId = () => {
    return `${Date.now()}-${Math.floor(Math.random() * 10000)}`;
};


let toDoList = []
const todoItems = localStorage.getItem('todo')
if (todoItems != null) {
    const toDos = JSON.parse(todoItems)
    toDoList = toDos
    console.log(toDoList)
}


const AddTodo = (value) => {
    const todoObject = {
        id : generateUniqueId(),
        value : value,
        isCompleted : false
    }
    if (value != "") {
        if (Array.isArray(toDoList)) {
            toDoList.push(todoObject)
        }
        console.log(toDoList)
        localStorage.setItem('todo', JSON.stringify(toDoList))
    } 
}

export default AddTodo