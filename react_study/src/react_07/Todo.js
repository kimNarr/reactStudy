import React, { useState } from 'react'
import List from './List'

function Todo() {
    const [list, setList] = useState([]);
    const [todo, setTodo] = useState('');

    const addText = (e) => {
      if(e.target.value == " ") {
        alert("공백부터 작성 할 수 없습니다.")
      } else {
        setTodo(e.target.value)
      }
    }

    const addList = () => {
        if(todo !== "") {
          const newList = list.concat({
            text : todo,
            check : false,
          })
          setList(newList)
          console.log(newList)
          setTodo('')
        } else {
          alert("할 일을 입력하세요")
        }
    }

    const addListEnter = (e) => {
        if(e.keyCode === 13) {
            addList()
        }
    }

  return (
    <div className='todo_wrap'>
      <div className='input_wrap'>
        <input type="text" value={todo} onChange={addText} onKeyDown={addListEnter} placeholder='할 일을 입력하세요'/>
        <button type='button' onClick={addList}>+</button>
      </div>
      <div className='filter_wrap'>
        <button type='button'>전체</button>
        <button type='button'>할일</button>
        <button type='button'>완료</button>
        <button type='button'>완료 삭제</button>
      </div>
      <List setList={setList} list={list}/>
    </div>

  )
}

export default Todo
