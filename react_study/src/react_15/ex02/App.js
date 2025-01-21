import React from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import './App.css'

function App() {
    return (
        <div>
            <h1>Redux To Do list</h1>
            <TodoForm />
            <TodoList />
        </div>
    )
}

export default App
