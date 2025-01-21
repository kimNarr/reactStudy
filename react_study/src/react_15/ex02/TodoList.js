import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function TodoList() {
    const todo = useSelector(state=>state.todo)

    const dispatch = useDispatch();

    const delTodo = (id)=>{
        dispatch({type: "DEL_TODO", payload: id})
    }

    const checkTodo = (id) => {
        dispatch({type: "CHK_TODO", payload: id})
    }

    return (
        <div>
            <h2>To Do List</h2>
            <ul>
                {
                    todo.map((val)=> (
                        <li key={val.id}>
                            <span 
                            onClick={()=>checkTodo(val.id)} 
                            className = {val.checked ? 'checked' : ''}
                            >{val.text}</span>
                            <button type='button' onClick={()=>delTodo(val.id)}>삭제</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default TodoList
