import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from './Main'
import './css/layout.css'
import Detail from './Detail'


function App() {
    return (
        <div className='wrap'>
            <Routes>
                <Route path='/' element={<Main />}/>
                <Route path='/detail/:id' element={<Detail />}/>
            </Routes>
        </div>
    )
}

export default App
