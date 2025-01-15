import React, {useEffect, useState} from 'react'
import ProductCard from '../Component/ProductCard'
import axios from 'axios'
import { useSearchParams } from 'react-router-dom';

function ProductAll() {

    const [productList, setProductList] = useState([]);

    // const data = async () => {
    //     const response = await axios.get('http://localhost:2000/products')
    //     setProductList(response.data)
    // }

    const [query] = useSearchParams();

    const data = async () => {
        const searchQuery = query.get(`q`) || ""; // url 검색어 가져오기
        try {
            const response = await axios.get(`http://localhost:2000/products/?q=${searchQuery}`);
            const filterData = response.data.filter(item=>
                item.title.includes(searchQuery) // title 필드에 검색어 포함 여부
            )
            setProductList(filterData)
        } catch(error) {
            console.log("error")
        }

        console.log(searchQuery)
    }

    useEffect(()=>{
        data();
    }, [query])

    // console.log(productList)

    return (
        <div className='contents'>
            {
                productList.map((item)=>(
                    <ProductCard key={item.id} item={item}/>
                ))
            }
        </div>
    )
}

export default ProductAll
