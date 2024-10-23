import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect, useState } from 'react'
import Footer from './Component/Footer/Footer'
import {Input} from './Component/InputAndAdd/Input'
import ToDoList from './Component/ToDoList/ToDoList'

function App() {
  
  
  return (
    <>
      <div className='body-content'>

        <div className='content'>

        <h1>TODO</h1>

        <Input />

        <ToDoList />

        <Footer />

        </div>

      </div>
      
    </>
  )
}

export default App

