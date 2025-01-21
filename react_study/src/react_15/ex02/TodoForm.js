import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

function TodoForm() {
    const [inputValue, setInputValue] = useState('');

    const dispatch = useDispatch();
    
    const addTodo = () => {
        if(inputValue.trim().length < 1) {
            alert("할 일을 입력하세요")
            setInputValue('')
        } else {
            dispatch({type: "ADD_TODO", payload: inputValue.trim()})
            setInputValue('')
        }
    }
    const addTodoEnter = (e) => {
        if(e.key === "Enter") {
            addTodo()
        }
    }
    return (
        <div>
            <input type="text" 
            value={inputValue} 
            onChange={(e)=> setInputValue(e.target.value)}
            onKeyDown={addTodoEnter}
            />
            <button type="button" onClick={addTodo}>할 일 추가</button>
        </div>
    )
}

export default TodoForm
