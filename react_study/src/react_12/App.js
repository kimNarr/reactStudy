import React from 'react'
import Main from './Main'
import About from './About'
import Product from './Product'
import { Routes, Route } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'

function App() {
    return (
        <div>
            {/* 

            라우터 (Router) : React에서 페이지 간 이동(라우팅)을 처리하기 위해 사용되는 라이브러리
            React는 기본적으로 SPA작동 방식으로 동작하므로 URL이 변경되더라도 전체페이지를
            새로고침하지 않고 필요한 부분만 업데이트 한다. 이를 통해 빠르고 부드러운 사용자 경험 제공
            URL경로에 따라 특정 컴포넌트를 렌더링하여 여러 페이지 처럼 보이도록 구현

            ※ 라우터 라이브러리 설치
            npm install react-router-dom

            1. 기본설정 <BrowserRouter></BrowserRouter> 앱 감싸기
            - 랜더링 되는 컴포넌트 URL을 관리 할 수 있도록 도와주는 컴포넌트

            2. 라우팅 구현
            - Routes Route 설정
            - <Routes></Routes> : 여러 <Route /> 를 감싸는 컨테이너
            - <Route /> :  특정 경로(path)에 매칭 될 때 렌더링 할 컴포넌트 지정
            - URL 경로에 따라 다른 컴포넌트를 렌더링
                <Route path='경로' element={<렌더링할 컴포넌트}/>
                기본 페이지 path='/'
            
            3. 네비게이션 추가
            - 페이지 간 이동, 리액트 라우터 <Link></Link> 컴포넌트 사용
            - 전체 페이지 새로고침 없이 경로를 변경
            - <Link to="이동할 경로"></Link>

            */}

            <h1>리액트 라우터</h1>

            <Nav />
            <Routes>
                <Route path='/' element={<Main />}/>
                <Route path='/about' element={<About />}/>
                <Route path='/product' element={<Product />}/>
            </Routes>
            <Footer />
        </div>
    )
}

export default App
