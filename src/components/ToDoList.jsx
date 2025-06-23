import React from 'react'

const todos = ['buy milk ', 'do homework','call mom'];
const ToDoList = () => {
  return (
    <div>
      <ul>
         {todos.map((todo,index)=> <li key={index}> {todo }</li>)}
      </ul>
    </div>
  )
}

export default ToDoList
