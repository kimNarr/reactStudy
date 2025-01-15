import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import ProductAll from './Page/ProductAll'
import Login from './Page/Login'
import ProductDetail from './Page/ProductDetail'
import Header from './Component/Header'
import PrivateRoute from './Route/PrivateRoute'
import './App.css'



function App() {

    const [loginOk, setLoginOk] = useState(false);

    useEffect(()=>{
        console.log(loginOk);
    },[loginOk])

    return (
        <div>
            <Header loginOk={loginOk} />
            <Routes>
                <Route path='/' element={<ProductAll />}/>
                <Route path='/login' element={<Login setLoginOk={setLoginOk}/>}/>
                <Route path='/products/:id' element={<PrivateRoute loginOk={loginOk}/>}/>
            </Routes>
        </div>
    )
}

export default App
