import React from 'react'
import { useProductQuery } from './hooks/useProduct'
import { useParams, useNavigate } from 'react-router-dom';

function Detail() {

    const navigate = useNavigate();

    const {id} = useParams();

    const {data, isLoading, isError, error} = useProductQuery(id);

    console.log(data)

    return (
        <div>
            <button type="button" onClick={()=> navigate("/")}>뒤로가기</button>
            <div>
                <h2>{data?.title}</h2>
                <img src={data?.img} alt={data?.title} />
                <h4>{data?.price}</h4>
                <ul>
                    {data?.size.map((item,idx)=>(
                        <li key={idx}>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Detail
