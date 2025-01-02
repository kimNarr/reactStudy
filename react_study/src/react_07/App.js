/*
TodoList

Hook을 사용해서 최적화 하며 제작
state, effect, ref, memo 등

필수 기능 / 컴포넌트 분할 제작

상단 컴포넌트
- 입력값
- 추가버튼

하단 컴포넌트
- 할 일 목록
- 체크박스 : 할 일을 했을시 체크(체크시 스타일 변하게 자율)
- 삭제 버튼

추가사항 - 수정, 완료된 항목 전체 삭제 등은 자율
기능 제작 후 css 작업
*/ 
import React from 'react'
import Todo from './Todo'
import List from './List'
import './css/layout.css'


function App() {
  return (
    <div className='wrap'>
        <div className='todoList'>
            <h1>Todo List</h1>
            <Todo />
        </div>
    </div>
  )
}

export default App
