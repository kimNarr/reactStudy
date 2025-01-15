import React, {useEffect, useState} from 'react'
import ProdCard from './ProdCard'
import axios from 'axios'
import { useNavigate, useSearchParams } from 'react-router-dom'

// json server : json 파일을 기반으로 간단하고 빠르게  Restful api 서버를 구축 할 수 있는 도구
// 백엔드 작업 없이도 데이터 요청 및 테스트

// db.json 파일 src, public 과 같은 위치에 생성
// npm install -g json-server
// npx json-server --watch db.json --port 번호


function App() {

    const [product, setProduct] = useState([]);
    const navigate = useNavigate();
    const [query] = useSearchParams();
    console.log("query", query)

    const data = async () => {
        const searchQuery = query.get("q") || "";
        try{
            const response = await axios.get(`http://localgost:2000/products?q=${searchQuery}`)
            //데이터를 필터링
            const filterData = response.data.filter((item)=> 
                item.title.includes(searchQuery) // title 필드에 검색어 포함여부확인
            )
            setProduct(filterData)
        } catch(error) {
            console.log("error");
        }
    }

    useEffect(()=>{
        data()
    },[query])

    console.log(product);

    const search = (event) => {
        if(event.key === "Enter") {
            let keyword = event.target.value
            console.log(keyword)
            navigate(`/?q=${keyword}`)
        }
    }

    return (
        <div>
        <h1>전체상품</h1>
        <input type='text' onKeyPress={(event) => search(event)}/>
        <div className='contents'>
            {
            product.map(item=>(
                <ProdCard key={item.id} item={item}/>
            ))
            }
        </div>
        </div>
    )
}

export default App
