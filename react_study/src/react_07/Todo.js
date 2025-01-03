import React, { useEffect, useState } from 'react'
import List from './List'

function Todo() {
    const [text, setText] = useState('');
    const [list, setList] = useState([]);
    const [onList, setOnList] = useState([]);
    const [filter, setFilter] = useState('all')

    const addText = (e) => {
      if(e.target.value === " ") {
        alert("공백부터 작성 할 수 없습니다.")
      } else {
        setText(e.target.value)
      }
    }

    const addList = () => {
        if(text === "") {
          alert("할 일을 입력하세요")
        } else {
          // const newList = list.concat({
          //   id: list.length,
          //   text : text,
          //   checked : false,
          // })
          const newList = [...list, {
            text : text,
            checked : false,
          }]
          setList(newList)
          setText('')
        }
    }

    const addListEnter = (e) => {
        if(e.keyCode === 13) {
            addList()
        }
    }

    useEffect(()=>{
      if(filter === "all") {
        setOnList(list)
      } else if (filter === "ing") {
        setOnList(list.filter(item => item.checked === false))
      } else if (filter === "end") {
        setOnList(list.filter(item => item.checked === true))
      }
    },[list, filter])


  return (
    <div className='todo_wrap'>
      <div className='input_wrap'>
        <input type="text" value={text} onChange={addText} onKeyDown={addListEnter} placeholder='할 일을 입력하세요'/>
        <button type='button' onClick={addList}>+</button>
      </div>
      <div className='filter_wrap'>
        <button type='button' onClick={()=>setFilter("all")}>전체</button>
        <button type='button' onClick={()=>setFilter("ing")}>할일</button>
        <button type='button' onClick={()=>setFilter("end")}>완료</button>
        <button type='button'>완료 삭제</button>
      </div>
      <List setList={setList} list={list} setOnList={setOnList} onList={onList}/>
    </div>

  )
}

export default Todo
