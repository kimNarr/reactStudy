import React from 'react'
import { useState } from 'react';

function App() {
    let count = 0;    
    let [count2, setCount2] =useState(0)

    const plus = ()=>{
        count ++;
        setCount2(count2 + 1);
        console.log("count : "+count)
        // re rendering 되기 때문에 항상 0에서 시작
        console.log("count2: "+count2)
        // 업데이트 되기전 값
    }

    // 1. 유저가 버튼 클릭
    // 2. count2 + 1 >> 1이됨
    // 3. setState 함수 호출
    // 4. console 실행
    // 변수값은 1로 보이고 state 값은 아직 변하지않았기 때문에 그전값이 보임(count2 = 0)
    // 5. 함수 종료
    // 6. 함수가 다시 실행 re rendering
    // 7. count = 0 을 거치면서 초기화
    // 8. state 값은 update가 되면서 다시 랜더링

    return (
    <div>
        {/* 
        
        State : 상태변수를 정의하고 업데이트 하는데 사용

        const [state, setState] = useState(상태의 초기값)
        state : 현재 상태값
        setState : 상태를 업데이트 하기위한 함수
        > 비동기적으로 동작

        state 값은 일반 변수처럼 변경 할 수 없음
        
        */}
        <h2>{count} : 일반변수</h2>
        <h2>{count2} : state</h2>

        <button type='button' onClick={plus}>클릭!</button>
    </div>
    )
}

export default App