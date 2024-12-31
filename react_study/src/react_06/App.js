import React from 'react'
import Ustate from './Ustate'
import Uref from './Uref'
import Umemo from './Umemo'
import Ureducer from './Ureducer'
import Ucallback from './Ucallback'

function App() {
  return (
    <div>
      {/* 
        hook : 컴포넌트의 관리를 쉽게 하기 위해 사용

        useState : 상태 업데이트
        useEffect : 라이프사이클
        useRef : DOM 요소에 직접 접근해야 할 때 사용
        useMemo : 성능 최적화를 위해 사용되는 훅
        useReducer : state 상태관리 로직을 컴포넌트 외부로 분리하여
        더 구조적이고 선언적인 방식으로 관리
        useCallback : 성능 최적화를 위해 사용 되는 훅,
        함수의 재생성을 방지하여 불필요한 렌더링을 줄이는데 사용
      */}

        <Ustate />
        <br /><br /><br /><br />
        <Uref/>
        <br /><br /><br /><br />
        <Umemo />
        <br /><br /><br /><br />
        <Ureducer/>
        <br /><br /><br /><br />
        <Ucallback/>
    </div>
  )
}

export default App
