import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

function TodoList() {
  const todos = useSelector(state=> state.todos)

  const dispatch = useDispatch();

  const toggleTodo = (id)=> {
    // console.log(id)
    dispatch({type: "TOGGLE_TODO", payload : id})
  }

  const remove = (id) => {
    dispatch({type: "REMOVE", payload: id})
  }

  return (
    <div>
      <h2>목록</h2>    
      <ul>
        {
          todos.map(item => (
            <li key={item.id}>
              <span onClick={()=>toggleTodo(item.id)} 
              style={{textDecoration : item.completed ? "line-through" : "none"}}
              >{item.text}</span>
              <button type="button" onClick={()=>remove(item.id)}>삭제</button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default TodoList
