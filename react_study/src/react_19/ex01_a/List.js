import React, { useState } from 'react'
import { useProductQuery } from './hooks/useProduct'
import { Link, useSearchParams } from 'react-router-dom';


function List() {

    const {data, isLoading, isError, error} = useProductQuery();
    // console.log(data, isLoading, isError)

    const [searchParams, setSearchParams] = useSearchParams();

    const searchQuery = searchParams.get('search') || '';

    const [inputText, setInputText] = useState(searchQuery);

    const onSearch = (e) => {
        e.preventDefault();
        setSearchParams({search : inputText})
    }

    const filterData = data?.filter(product=> product.title.includes(searchQuery))

    console.log(inputText)

    if(isLoading) { return <h1>...로딩중</h1>}
    if(isError) { return <h1>{error.message}</h1>}

    return (
        <div>
            <h1>list</h1>
            <form onSubmit={onSearch}>
                <input 
                type="text" 
                placeholder='상품 검색'
                value={inputText}
                onChange={(e)=> setInputText(e.target.value)}
                />
            </form>
            <div>
                {filterData?.map(item=>(
                    <Link key={item.id} to={`/products/${item.id}`}>
                        <div>
                            <img src={item.img} alt={item.title} />
                            <h3>{item.title}</h3>
                            <p>{item.price}원</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default List
