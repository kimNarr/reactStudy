import React, { useState } from 'react'
// import axios from 'axios'
// import { useQuery } from '@tanstack/react-query'
import { useProductQuery } from './hooks/useProd';

function RQuery() {

    const [id, setId] = useState("");
    console.log("id", id)

    const {data, isLoading, isError, error, refetch} = useProductQuery(id);

    // console.log(data, isLoading);
    // console.log("에러", isError, error)

    if(isLoading) {
        return <h1>---로딩</h1>
    }

    if(isError) {
        return <h1>{error.message}</h1>
    }

    return (
        <div>
            {data?.map(item=>(
                <div key={item.id} onClick={()=>setId(item.id)}>{item.title}</div>
            ))}

            <button type="button" onClick={refetch}>상품보기</button>
        </div>
    )
}

export default RQuery
