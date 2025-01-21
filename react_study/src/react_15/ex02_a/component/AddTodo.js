import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

function AddTodo() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const addTodo = () => {
    if(text.trim() !== '') {
      dispatch({type: "ADD_TODO", payload : {text}})
      setText('')
    }
  }

  const addKeyDown = (e) => {
    if(e.key === "Enter") {
      addTodo()
    }
  }

    return (
      <div>
        <input type="text" 
        placeholder='할 일을 입력하세요' 
        onChange={(e)=> setText(e.target.value)}
        value={text}
        onKeyDown={(e)=>addKeyDown(e)}
        />      
        <button type="button" onClick={addTodo}>추가</button>
      </div>
    )
}

export default AddTodo
