import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Yoo from './Yoo'
import Archives from './Archives'
import Foundation from './Foundation'
import Header from './Header'
import Footer from './Footer'
import './css/layout.css'

function App() {
    return (
        <div className='wrap'>
            <Header />
            <Routes>
                <Route path='/' element={<Yoo />}/>
                <Route path='/archives' element={<Archives />}/>
                <Route path='/foundation' element={<Foundation />}/>
            </Routes>
            <Footer />
        </div>
    )
}

export default App
