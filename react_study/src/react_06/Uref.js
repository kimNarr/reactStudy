import React, { useRef, useState } from 'react'

// DOM 요소에 직접 접근 할 때 사용하는 Hook
// state와 달리 값이 변경 되어도 컴포넌트가 다시 랜더링 되지 않는다.

function Uref() {

    // const inputRef = useRef(null); // DOM 요소를 참조할 변수 생성

    // const focus = () => {
    //     inputRef.current.focus();
    // }

    // const [stateCount, setStateCount] = useState(0); // 랜더링되는 상태 값
    const refCount = useRef(0); // 랜더링이 되지 않는 값

    const onClick = () => {
        // setStateCount( stateCount + 1);
        refCount.current += 1;
        console.log(refCount.current)
    }

    return (
        <div>
            {console.log("render")}

            {/* <input type="text" ref={inputRef}/>
            <button type='button' onClick={focus}>클릭</button> */}

            <h2>Count :  / {refCount.current}</h2>
            <button type='button' onClick={onClick}>클릭</button>
        </div>
    )
}

export default Uref
