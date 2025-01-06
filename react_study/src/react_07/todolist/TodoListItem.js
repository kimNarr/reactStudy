import React from 'react'

function TodoListItem({todo, toggleTodo, deleteTodo}) {
    // console.log("todo",todo)
  return (
    <li>
      <input type="checkbox" checked={todo.complete} onChange={()=> toggleTodo(todo.id)}/>
      <span style={{textDecoration: todo.complete? 'line-through':'none'}}>{todo.content}</span>
      <button type="button" onClick={()=>deleteTodo(todo.id)}>삭제</button>
    </li>
  )
}

export default TodoListItem
