import { useEffect, useState } from "react"


const generateUniqueId = () => {
    return `${Date.now()}-${Math.floor(Math.random() * 10000)}`;
};


let toDoList = []
const todoItems = localStorage.getItem('todo')
if (todoItems != null) {
    const toDos = JSON.parse(todoItems)
    toDoList = toDos
    // console.log(toDoList)
}


const AddTodo = (value) => {
    const todoObject = {
        id : generateUniqueId(),
        value : value,
        isCompleted : false
    }
    if (value != "") {
        
    } 
}

export default AddTodo