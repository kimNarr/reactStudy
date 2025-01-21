import React from 'react'
import ProductList from './ProductList'
import Cart from './Cart'

function App() {
    return (
        <div style={{maxWidth:'1200px', margin: '100px auto', padding: '20px'}}>
            <h1>Redux 쇼핑몰 App</h1>
            <div className='content' style={{display:'flex',justifyContent:'space-between', gap:'20px'}}>
                <ProductList />
                <Cart />
            </div>
        </div>
    )
}

export default App
