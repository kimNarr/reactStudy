import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {plus, minus, gop, reset} from './store/reducer/counterSlice'

function App() {
    const count = useSelector(state=>state.counter.count) // counter >> store 에서 정의한 이름
    const dispatch = useDispatch();

    const clickPlus = () => {
        // dispatch({type: "PLUS", payload : 5})
        dispatch(plus(5))
    }
    const clickMinus = () => {
        dispatch(minus(5))
    }
    const clickGop = () => {
        dispatch(gop(5))
    }
    const clickReset = () => {
        dispatch(reset())
    }

    return (
        <div>
            <h1>{count}</h1>
            <button type='button' onClick={clickPlus}>증가</button>
            <button type='button' onClick={clickMinus}>감소</button>
            <button type='button' onClick={clickGop}>곱</button>
            <button type='button' onClick={clickReset}>초기화</button>
        </div>
    )
}

export default App
