import { createElement, useState } from 'react'
import React from 'react'
import './App.css'

function Task2(props){
  return (
    <>
      <span>Mettre ma tache ici{props.element}</span>
    </>
  )
}

function DisplayElement(props){
  const myList = props.element.map((item, index) => <p> k={index} {item.task}</p>)
}

function App() {
  const [task,setTask] = useState([])
  const [element,setElement] = useState("")
  // console.log(task,"coucou")
  function toto(){
      // task = ["nouveau elements"]
      setTask([...task, element])
      console.log(task)
      // elementSet = document.createElement("h1")
      // element.innerHTML += task
      // document.appendChild(task)
  }
  
  const onChange = ()  => {
    event.preventDefault()
    setElement(event.target.value)
    console.log(element)
  }

  return (
    <>
    <button onClick={toto}>Ajouter une tache</button>
    <input  type="text" value={element} onChange={onChange}></input>
    <Task2 element="prout"></Task2>
    <DisplayElement element={myList}></DisplayElement>
    </>
  )
}

export default App