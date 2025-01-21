import React from 'react'
import { useDispatch } from 'react-redux'

function ProductList() {

    const dispatch = useDispatch();

    const products = [
        {id: 1, name: "상품A", price: "41,200"},
        {id: 2, name: "상품B", price: "22,120"},
        {id: 3, name: "상품C", price: "30,700"},
    ]

    const addToCart = (product) => {
        dispatch({type: "ADD_TO_CART", payload: product})
    }

    return (
        <div className='productList' style={{flexBasis:'60%'}}>
            <h2>상품</h2>
            <div className='list'>
                {
                    products.map(product =>(
                        <div key={product.id}>
                            <h3>{product.name}</h3>
                            <p>가격 : {product.price} 원</p>
                            <button type='button' onClick={()=>addToCart(product)}>장바구니</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ProductList
