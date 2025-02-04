import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import Home from './Home'
import RQuery from './RQuery'
import Normal from './Normal'

    function App() {
        return (
            <div>
                <h2>리액트 쿼리</h2>
                <p>: 서버 상태를 효율적으로 관리하기 위한 라이브러리</p>
                {/* 
                리액트 상태 3가지
                1. 지역 상태 - 컴포넌트안에서 사용하는 상태
                2. 전역 상태 - 전체에서 쓰이는 상태/테마,컬러 등등 자식에게 보내주는 것들
                3. 서버 상태 - api 통신할때 필요한 상태
                */}
                <Link to="/">홈</Link>
                <Link to="/query" style={{margin:"20px"}}>리액트쿼리</Link>
                <Link to="/normal" style={{margin:"20px"}}>NORMAL</Link>

                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/query' element={<RQuery/>}/>
                    <Route path='/normal' element={<Normal/>}/>
                </Routes>
            </div>
        )
    }

export default App