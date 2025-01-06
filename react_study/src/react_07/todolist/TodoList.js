import React from 'react'
import TodoListItem from './TodoListItem'

function TodoList({todos, toggleTodo, deleteTodo}) {
    // console.log(todos, toggleTodo, deleteTodo)
  return (
    <div>
      <ul>
        {
            todos.map((todo)=>(
                <TodoListItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
            
            ))
        }
      </ul>
    </div>
  )
}

export default TodoList
