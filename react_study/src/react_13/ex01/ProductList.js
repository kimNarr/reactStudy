import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

function ProductList() {

    const [products, setProducts] = useState([]);

    useEffect(()=>{
      axios.get("/db.json")
      .then((response)=> setProducts(response.data.products))
      .catch((error)=> console.log("error"))
    }, [])

    console.log(products)

    return (
        <div>
            <h1>상품목록</h1>
            <ul>
              {
                products.map((item)=>(
                  <li key={item.id}>
                    <Link to={`/products/${item.id}`}>
                      <img src={item.img} alt={item.title} />
                      <h2>{item.title}</h2>
                      <p>가격 {item.price}원</p>
                    </Link>
                  </li>
                ))
              }
              
            </ul>
        </div>
    )
}

export default ProductList
