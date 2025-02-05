import React from 'react'
import List from './List'
import Detail from './Detail'
import { Routes, Route } from 'react-router-dom'
import './css/layout.css'

function App() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<List />}/>
                <Route path='/products/:id' element={<Detail />}/>
            </Routes>
        </div>
    )
}

export default App