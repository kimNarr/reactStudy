import React, { useReducer } from 'react'

// useReducer : state 상태관리 로직을 컴포넌트 외부로 분리하여 더 구조적이고 선언적인
// 방식으로 관리
// 복잡한 상태관리가 필요한 경우
// const [state, dispatch] = useReducer(reduce, in)
// state : 현재상태값
// dispatch : 상태 업데이트를 트리거하는 함수
// reduce : 상태 업테이트 함수
// in : 초기값

function reducer(state, action) {
    console.log(state, action)
    switch(action.type) {
        case "plus":
            if(state.count < 10) {
                return {count : state.count + 1};
            } else {
                return {count : state.count}
            }
        case "minus":
            if(state.count > 0) {
                return {count : state.count - 1};
            } else {
                return {count : 0};
            }
        case "reset":
            return {count : 0};
        default :
            console.log("오류")
    }
}

function Ureducer() {

    const [state, dispatch] = useReducer(reducer, {count : 0})
    return (
        <div>
            <h1>카운트 : {state.count}</h1>
            <button type='button' onClick={()=>dispatch({type:"plus"})}>증가</button>
            <button type='button' onClick={()=>dispatch({type:"minus"})}>감소</button>
            <button type='button' onClick={()=>dispatch({type:"reset"})}>초기화</button>
        </div>
    )
}

export default Ureducer
