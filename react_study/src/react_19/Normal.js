import React, { useEffect, useState } from 'react'

function Normal() {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(null);

    const fetchProduct = async () => {
        setIsLoading(true);
        const url = `http://localhost:5000/products`;
        const response = await fetch(url);
        const data = await response.json();
        setIsLoading(false);
        setData(data);
    }

    useEffect(()=>{
        fetchProduct()
    },[])

    if(isLoading) {
        return <h1>..Loading</h1>
    }

    return (
        <div>
            {
                data?.map(item=>(
                    <div key={item.id}>{item.title}</div>
                ))
            }
        </div>
    )
}

export default Normal
