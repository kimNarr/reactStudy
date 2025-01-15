import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function ProductDetail() {

    const {id} = useParams(); // url 에서 파라미터값 가져오기
    console.log(id)
    const [product, setProduct] = useState(null);

    useEffect(()=>{
        axios.get('/db.json')
        .then((response)=>{
            const foundProduct = response.data.products.find((item)=> item.id === parseInt(id));
            setProduct(foundProduct)
        })
        .catch((error)=> console.log('error'))
    }, [id])

    console.log(product)

    return (
        <div>
            <img src={product?.img} alt={product?.title} />
            <h2>{product?.title}</h2>
            <p>가격: {product?.price}</p>
            <p>사이즈:</p>
            <ul>
                {
                    product?.size.map((size)=>(
                        <li key={size}>{size}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ProductDetail
