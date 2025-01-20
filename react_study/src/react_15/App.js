import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

// useDispatch : 함수형 컴포넌트 내에서 redux 스토어에 액션을 하여 상태변경시 사용
// useSelector : 함수형 컴포넌트에서 store상태를 읽을 수 있도록 해줌
// redux store의 상태를 구독하고, 상태가 변경될 때 필요한 데이터를 자동으로 가져오면 컴포넌트를 리렌더링
 import Box from './Box';

function App() {    

    const dispatch = useDispatch();

    const count = useSelector(state => state.count);
    const id = useSelector(state => state.id);
    const pw = useSelector(state => state.pw);
    const [idValue, setIdValue] = useState("");
    const [pwValue, setPwValue] = useState("");

    const plus = () => {
        dispatch( {type: "PLUS", payload : {num: 5}} )
    }

    const minus = () => {
        dispatch( {type: "MINUS", payload : {num : 5}} )
    }

    const login = () => {
        dispatch({type: "LOGIN", payload : {id: idValue, pw: pwValue}})
    }

    const logout = () => {
        dispatch({type: "LOGIN", payload : {id: '', pw: ''}})
        setIdValue('');
        setPwValue('');
    }

    return (
        <div>
            <h1>{count}</h1>
            <button type='button' onClick={plus}>증가</button>
            <button type='button' onClick={minus}>감소</button>
            <Box />
            <h2>{id}, {pw}</h2>
            {
                (id === '' && pw === '') ? (
                    <div>
                        <input type="id" value={idValue} onChange={(e)=>setIdValue(e.target.value) }/>
                        <input type="password" value={pwValue} onChange={(e)=>setPwValue(e.target.value) }/>
                        <button type='button' onClick={login}>로그인</button>
                    </div>
                ) : <button type='button' onClick={logout}>로그아웃</button>
            }
            
        </div>
    )
}

export default App
