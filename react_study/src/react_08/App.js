import React, {useState, useEffect} from 'react'
import axios from 'axios'

function App() {
    const [post, setPost] = useState([]);

    // useEffect(()=>{
    //     const Data = async () => {
    //         try {
    //             const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    //             // console.log(response);
    //             const datas = await response.json();
    //             // console.log(datas)
    //             setPost(datas)
    //         } catch(error) {
    //             console.log("error")
    //         }
    //     }
    //     Data()
    // },[])

    // console.log(post)

    useEffect(()=>{
        const Data = async () => {
            try{
                const response = await axios.get('https://newsdata.io/api/1/sources?country=ca&apikey=pub_64515215181728cbe7be384f9a473ecddce17');
                setPost(response.data.results)
                console.log(response)
            }catch(error){
               console.log("error") 
            }
        }
        Data();
    },[])
  return (
    <div>
      {/* 
        Api : 서버와 클라이언트 간 데이터를 주고 받는 인터페이스

        react에서 Api를 호출 할 때는 async/await 를 사용

        try ... catch 구문 : error 를 처리하기 위해 사용 되는 구문

        try{
            에러가 발생 할 가능성이 있는 코드
        } catch (error) {
            에러가 발생했을 때 실행 되는 코드 
        }

        Axios
        json 변환을 자동으로 처리하므로 코드가 간결
        요청 및 응답 인터셉터, 기본 url 설정등 

      */}
      <h1>게시글 목록</h1>
      <ul>
        {
            // post.map(posts=>(
            //     <li key={posts.id}>
            //         <h2>{posts.title}</h2>
            //         <p>{posts.body}</p>
            //     </li>
            // ))
            post.map(posts => (
                <li key={posts.id}>
                    <h2>{posts.name}</h2>
                    <p>{posts.discription}</p>
                </li>
            ))
        }
      </ul>
    </div>
  )
}

export default App
