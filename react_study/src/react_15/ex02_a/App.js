import React from 'react'
import AddTodo from './component/AddTodo'
import TodoList from './component/TodoList'

function App() {
    return (
        <div>
            <h1>투두리스트</h1>
            <AddTodo />
            <TodoList />
        </div>
    )
}

export default App
