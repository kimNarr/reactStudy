import React, { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
//     const [post, setPost] = useState([])
//     const [clicked, setClicked] = useState(false)
  
//     useEffect(()=>{
//         const Data = async () => {
//             try{
//                 const response = await axios.get('https://newsdata.io/api/1/sources?country=au&apikey=pub_64515215181728cbe7be384f9a473ecddce17');
//                 setPost(response.data.results)
//                 console.log(response.data)
//             }catch(error) {
//                 console.log("error")
//             }
//         }
//         Data();
//     },[clicked])
    
//   return (
//     <div>
//       <button type='button' onClick={()=>setClicked(!clicked)} >클릭</button>
      
//         {
//             clicked ?
//             post.map(val => (
//                 <div key={val.id}>
//                     <a href={val.url} target='_blank'>
//                         <h1>{val.name}</h1>
//                         <p>{val.description}</p>
//                     </a>
//                 </div>
//             )) : <div>뉴스 없음</div>
//         }
//     </div>
//   )
const [post, setPost] = useState([]);

    const click = async()=>{
        try{
            const response = await axios.get(`https://newsdata.io/api/1/latest?country=kr&apikey=pub_64515215181728cbe7be384f9a473ecddce17`);
            setPost(response.data.results)
            console.log(response.data.results)
        } catch(error) {
            console.log("error");
        }
    }

    console.log("post"+post)
  return (
    <div>
      <button type='button' onClick={click}>호출</button>
      <ul>
        {
            post.map((posts)=>(
                <li key={posts.article_id}>
                    <h2>{posts.title}</h2>
                    <p>{posts.description}</p>
                </li>
            ))
        }
      </ul>
    </div>
  )
}

export default App
