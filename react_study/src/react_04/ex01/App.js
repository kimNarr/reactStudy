import React from 'react'
import {useState} from 'react'

function App() {
    const [count, setCount] = useState(0);
    // function plus() {
    //     if(count < 10) {
    //         setCount(count + 1);
    //     } else if (count == 10) {
    //         alert('더이상 추가 할 수 없어요')
    //     }
    // }
    // function minus() {
    //     if(count > 0) {
    //         setCount(count - 1)
    //     } else if(count == 0) {
    //         alert('더이상 내려가지 않아요')
    //     }
    // }

    const [on, setOn] = useState(false);


    let items = [
        {id:1, category:'fruit', name: 'apple'},
        {id:2, category:'vegetable', name: 'tomato'},
        {id:3, category:'fruit', name: 'banana'},
        {id:4, category:'vegetable', name: 'carrot'},
        {id:5, category:'fruit', name: 'melon'},
    ]

    const [select, setSelect] = useState('fruit'); //초기값 fruit

    // 선택된 카테고리에 해당하는 데이터 필터링
    const filterItem = items.filter(item => item.category === select);


  return (
    <div>
        <div style={{marginBottom: '100px'}}>
            {/* 숫자 카운터 버튼2개 1씩 증가 1씩 감소 */}
            <h2>{count}</h2>
            {/* <button type='button' onClick={plus}>플러스</button>
            <button type='button' onClick={minus}>마이너스</button> */}
            <button type='button' onClick={()=>setCount(count < 10 ? count + 2 : count)}>플러스</button>
            <button type='button' onClick={()=>setCount(count > 0 ? count - 1 : count)}>마이너스</button>
        </div>
        <div style={{marginBottom: '100px'}}>
            <button onClick={()=>setOn(!on)}>{on? "off" : "on"}</button>
            <p>결과 : {on ? "on" : "off"}</p>
        </div>
        <div style={{marginBottom: '100px'}}>
            <h2>리스트</h2>
            <button type='button' onClick={()=> setSelect('fruit')}>과일</button>
            <button type='button' onClick={()=> setSelect('vegetable')}>야채</button>
            
            <ul>
                {/* {filterItem.map(item=>{
                    return <li key={item.id}>{item.name}</li>
                })} */}

                {filterItem.map(item=>(
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default App
