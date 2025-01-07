import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NewsList from './NewsList'
import './css/layout.css'

function App() {
    const [news, setNews] = useState([])
    const [filter, setFilter] = useState('all')

    const category = [
        {id:1, filter:'all', name: '전체'},
        {id:2, filter:'top', name: 'TOP'},
        {id:3, filter:'sports', name: '스포츠'},
        {id:4, filter:'technology', name: '기술'},
        {id:5, filter:'business', name: '비즈니스'},
        {id:6, filter:'science', name: '과학'},
        {id:7, filter:'entertainment', name: '연예'},
        {id:8, filter:'health', name: '건강'},
        {id:9, filter:'world', name: '국제'},
        {id:10, filter:'politics', name: '정치'},
        {id:11, filter:'environment', name: '환경'},
        {id:12, filter:'food', name: '음식'},
    ]

    useEffect(()=>{
        const allNews = async ()=> {
            try {
                if(filter === 'all'){
                    const newsList = await axios.get(`https://newsdata.io/api/1/latest?country=kr&apikey=pub_64515215181728cbe7be384f9a473ecddce17`)
                    setNews(newsList.data.results)
                } else {
                    const newsList = await axios.get(`https://newsdata.io/api/1/latest?country=kr&category=${filter}&apikey=pub_64515215181728cbe7be384f9a473ecddce17`)
                    setNews(newsList.data.results)
                    console.log(newsList)
                }         
            } catch(error) {
                console.log("error")
            }
        }
        allNews()
    },[filter])

    
    return (
        <div className='wrap'>
            <div className='contents'>
                <h2 className='title'>NEWS</h2>
                <div className='category'>
                    {
                        category.map((val)=>(
                            <button 
                            key={val.id} 
                            type='button' 
                            onClick={()=>setFilter((val.filter))}
                            className={filter === val.filter ? 'on' : ''}>{val.name}</button>
                        ))
                    }
                </div>
                <div className='newsList'>
                    <NewsList news={news} />
                </div>
            </div>
        </div>
    )
}

export default App
