import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ProductDetail() {

    const [product, setProduct] = useState(null);
    let {id} = useParams();

    const data = async () => {
        try{
            const response = await axios.get(`http://localhost:2000/products/${id}`);
            setProduct(response.data)
        } catch(error) {
            console.log("error")
        }
    }

    useEffect(()=>{
        data();
    }, [id])

    console.log(product)
    return (
        <div className='p_detail'>
            <img src={product?.img} alt={product?.title} />
            <div className='info'>
                <h3>{product?.title}</h3>
                <h4>{product?.price}원</h4>
                <p>{product?.new === true? "신제품" : ""}</p>
                <p>사이즈</p>
                <ul>
                    {
                        product?.size.map((size, idx)=>(
                            <li key={idx}>{size}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default ProductDetail
