import React from 'react'
import { useNavigate } from 'react-router-dom'


function ProductCard({item}) {

    const navigate = useNavigate();
    const showDetail = () => {
        navigate(`/products/${item.id}`)
    }

    // console.log(item);
    return (
        <div className='box' onClick={showDetail}>
            <img src={item?.img} alt={item?.title} />
            <h3>{item?.title}</h3>
            <h4>{item?.price}</h4>
            <p className='new'>{item?.new === true ? "신제품" : ""}</p>
            <p className='size'>샤이즈</p>
            <ul>
                {
                    item?.size.map((size,idx)=>(
                        <li key={idx}>{size}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ProductCard
