import React from 'react'

const Display = (props) => {
  return (
    <div>
      {props.todos.map((todo,idx)=><p>{todo.text}<input type="checkbox" checked={todo.completed} onChange={e=>props.updateTask(idx)}></input><button onClick={e=>props.deleteTask(idx)}>delete</button></p>)}
    </div>
  )
}

export default Display
