import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ProductList from './ProductList'
import ProductDetail from './ProductDetail'


function App() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<ProductList />}/>
                <Route path='/products/:id' element={<ProductDetail />}/>
            </Routes>
        </div>
    )
}

export default App
