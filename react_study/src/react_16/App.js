import React, { useEffect, useState } from 'react'
import { productActions } from './redux/actions/productActions';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import './App.css'

function App() {

    const dispatch = useDispatch();
    const product = useSelector(state=>state.product);
    const navigate = useNavigate();
    const [query] = useSearchParams();
    

    const data = () => {
        const searchQuery = query.get("q") || "";
        dispatch(productActions.data(searchQuery))
    }

    useEffect(()=>{
        data()
    },[query])

    const clickSearch = (keyword) => {
        console.log(keyword)
        navigate(`/?q=${keyword}`);
    }

    const search = (e) => {
        if(e.key === "Enter") {
            let keyword = e.target.value;
            clickSearch(keyword)
        }
    }
    
    

    return (
        <div className='wrap'>
            <input type="text" onKeyDown={(e)=> search(e)}/>
            
            <ul>
                {
                    product.map(item => (
                        <li key={item.id}>
                            <img src={item.img} alt={item.title} />
                            <h2>{item.title}</h2>
                            <p>가격: {(item.price).toLocaleString('ko-KR')} 원</p>
                            <p>사이즈</p>
                            <div>
                                {
                                item.size.map((s, idx) => 
                                    <span key={idx}>{s}</span>)
                                }
                            </div>
                        </li>
                    ))
                }
            </ul>
            
        </div>
    )
}

export default App