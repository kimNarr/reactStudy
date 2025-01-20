import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';

function App() {
    const dispatch = useDispatch();

    const products = useSelector(state => state.products)
    const cart = useSelector(state => state.cart)

    
    
  
    
    const addCart = (item) => {
        console.log(item)
        
        dispatch({type: "ADDCART", payload : item})
    }
    console.log(cart)

    return (
        <div>
            <h1>Redux 쇼핑카트 애플리캐이션</h1>
            <br />
            <div>
                <h2>상품</h2>
                <ul>
                {
                    products.map((item, idx) => (
                        <li key={idx}>
                            <h2>{item.name}</h2>
                            <p>{item.price}</p>
                            <button type='button' onClick={()=>addCart(item)}>장바구니</button>
                        </li>
                    ))
                }
                </ul>
                <h2>장바구니</h2>
                <ul>
                    {
                        cart.map((item, idx)=> (
                            <li key={idx}>
                                <h2>{item.name}</h2>
                                <p>{item.price}</p>
                                <p>{item.count}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default App
