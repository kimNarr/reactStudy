import React, { useState } from 'react'
import axios from 'axios';

function ApiNews() {
    const [post, setPost] = useState([]);

    const click = async()=>{
        try{
            const response = await axios.get('https://newsdata.io/api/1/sources?country=kr&apikey=pub_64515215181728cbe7be384f9a473ecddce17');
            setPost(response.data.results)
            
        } catch(error) {
            console.log("error");
        }
    }
  return (
    <div>
      <button type='button' onClick={click}>호출</button>
      <ul>
        {
            post.map(posts=>(
                <li key={posts.article_id}>
                    <h2>{posts.title}</h2>
                    <img src={posts.image_url} alt={posts.title} />
                </li>
            ))
        }
      </ul>
    </div>
  )
}

export default ApiNews