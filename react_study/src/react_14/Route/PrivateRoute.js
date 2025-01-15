import React from 'react'
import ProductDetail from '../Page/ProductDetail'
import { Navigate } from 'react-router-dom'
import Login from '../Page/Login'

function PrivateRoute({loginOk}) {
    return loginOk === true ? <ProductDetail /> : <Navigate to={"/login"} />
}

export default PrivateRoute
