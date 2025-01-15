import React from 'react'
import { useNavigate } from 'react-router-dom';

function Login({setLoginOk}) {

    // console.log(setLoginOk)

    const navigate = useNavigate()

    const enterLogin = (e) => {
        e.preventDefault(); // from 새로고침 방지
        setLoginOk(true)
        navigate("/")
    }

    return (
        <div className='login_form'>
            <h1>Login</h1>
            <form onSubmit={(e)=>{enterLogin(e)}} action="">
                <div className='idpw'>
                    <div className='id'>
                        <label htmlFor='id'>아이디</label>
                        <input type="text" id='id' placeholder='아이디를 입력하세요'/>
                    </div>
                    <div className='password'>
                        <label htmlFor="pw">비밀번호</label>
                        <input type="password" id="pw" placeholder='비밀번호를 입력하세요'/>
                    </div>
                    <button type='submit' onSubmit={enterLogin}>로그인</button>
                </div>
            </form>
        </div>
    )
}

export default Login
