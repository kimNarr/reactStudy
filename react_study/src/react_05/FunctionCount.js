import React, {useState, useEffect} from 'react'

// useEffect : 함수형 컴포넌트에서 라이프사이클을 주기위한 함수
// useEffect(()=>{콜백함수},[배열])
// {콜백함수} : componentDidMount 역할
// [배열] : componentDidUpdate 역할
// update 되지않는값을 실행시키면 무시됨

/*

※ 정리
componentDidMount >> useEffect(()=>{},[]);
componentDidUpdate >> useEffect(()=>{},[state]);
componentWillUnmount >> useEffect(()=>{return ()=>{종료};},[]);

*/

function FunctionCount() {
    const [count, setCount] = useState(0)
    const [value, setValue] = useState(2)

    function plus() {
        setCount(count + 1)
        setValue(value + 2)
    }

    useEffect(()=>{
        console.log("useEffect-1", "= componentDidMount")
        // api 호출을 useEffect에서 많이 사용
    },[])

    useEffect(()=>{
        console.log("useEffect-2", "count : " + count);
    },[count])

    useEffect(()=>{
        console.log("useEffect-3", "value : " + value);
    },[value])

    useEffect(()=>{
        return()=>{
            console.log("종료");
        }
    },[])
  return (
    <div>
      {console.log("render")}
      {/* 버튼 클릭시 1씩 증가*/}
      <h2>count : {count}</h2>
      <h2>value : {value}</h2>
      <button type='button' onClick={plus}>클릭</button>
    </div>
  )
}

export default FunctionCount
