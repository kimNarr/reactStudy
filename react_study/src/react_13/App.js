import React, {useState} from 'react'
import { Routes, Route, Link, useNavigate, Navigate } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Prod from './Prod'
import ProDet from './ProDet'
import Login from './Login'
import User from './User'


function App() {

    const navigate = useNavigate();

    const click = () => {
        navigate('/Prod?q=Jeans&page=3')
    }

    const [login, setLogin] = useState(false);

    const PrivateRoute = () => {
        return login == true ? <User/> : <Navigate to="/Login" />
    }

    return (
        <div>
            {/* 
            url 디자인
            Restful Route :  웹 애플리케이션에서 resource에 대한 경로(url)와 그것을 처리하는 http메서드를 결합하여 설계된 라우팅방식

            Restful verb 종류
            get : 정보를 가져올때 사용
            post : 새로운 데이터를 만들어 낼 때 사용
            put : 기존 데이터를 수정시 / 전체 수정
            patch : 기존 데이터를 수정시 / 부분 수정
            delete : 기존 데이터 삭제

            /경로/:id  >> 해당경로 아이템의 파라미터값 을 보여줌

            useParames Hook

            React Router 에서 제공하는 훅으로 url 경로에 포함된 동적 파라미터 값을 추출할 수 있도록 도와줌
            이 훅은 라우팅을 구현 할 때 유용
            url 경로의 일부로 전달 된 데이터를 컴포넌트에서 사용 할 수 있음.

            ?뒤에 있는 값들을 전부 쿼리라고 함 / 쿼리도 url에서 가져와서 사용 할 수 있음

            useSearchParams
            : 현재의 url의 쿼리 문자열을 읽고 조작 할 수 있도록 도와주는 훅
            쿼리 문자열은 url의 ? 뒤에 위치하며, 주로 키-값 쌍으로 데이터를 전달하는데 사용

            Navigate 컴포넌트를 사용  = 리다이렉트
            렌더링 시점에 특정 경로로 리다이렉트 할 때 사용됨
            주로 클래스 기반 컴포넌트나 조건부 렌더링 상황에서 유용하게 사용

            */}
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/About"}>About</Link></li>
                <li><Link to={"/Prod"}>Prod</Link></li>
                <li><Link to={"/Login"}>Login</Link></li>
                <li><Link to={"/User"}>User</Link></li>
            </ul>

            <button type='button'>이동</button>

            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/About' element={<About/>}/>
                <Route path='/Prod' element={<Prod/>}/>
                <Route path='/Prod/:top' element={<ProDet/>}/>
                <Route path='/Login' element={<Login/>}/>
                <Route path='/User' element={<User/>}/>
            </Routes>
        </div>
    )
}

export default App
