import React, {useState, useEffect} from 'react'
import axios from 'axios'
import NewsItem from './NewsItem';

function NewsList({category}) {
    
    const [article, setArticle] = useState([])

    useEffect(()=>{
        const Data = async() => {
            try {
                const filter = category === "all" ? '' : `&category=${category}`;
                const response = await axios.get(`https://newsdata.io/api/1/latest?country=kr${filter}&apikey=pub_64515215181728cbe7be384f9a473ecddce17`);
                setArticle(response.data.results || []);
            } catch(error) {
                console.log("error");
                setArticle([]) //에러 발생시 빈 배열로 
            }
        }
        Data()
    },[category]);

    return (
        <div>
            {
                article.map((article)=>(
                    <NewsItem key={article.article_id} article={article}/>
                ))
            }
        </div>
    )
}

export default NewsList