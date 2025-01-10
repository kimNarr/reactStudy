import React from 'react'
import { useNavigate } from 'react-router-dom'

function Main() {

    const navigate = useNavigate(); // Hook 호출

    const move = () => {
        navigate('/about'); // navigate('경로')
    }

    return (
        <div className='main'>
            {/* 
            
            useNavigate : 프로그래밍 방식으로 페이지를 이동 할 때 사용
            
            */}

            <h2>메인페이지</h2>
            <button type='button' onClick={move}>About 페이지로 이동</button>
        </div>
    )
}

export default Main
