import React from 'react';
import Box from './Box';


function App() {
    let user = {title: "홍길동", contents: "홍길동입니다."}
  return (
    <div>
      {/* 
      
      Props
      부모컴포넌트가 자식컴포넌트에 전달하는 데이터 매개변수처럼 동작

      props 사용시 주의사항
      - props 는 읽기 전용 자식컴포넌트에서 직접 수정 불가
      - props 는 단방향  데이터 흐름을 유지해야함 데이터는 항상 부모에서 자식으로 흘러야함
      - props의 타입을 검사하고 기본값을 설정하는 것이 좋음
      - 너무 많은 컴포넌트를 거쳐 props를 전달하는 것은 좋지 않음
      - 함수를 props로 전달 할 때는 불필요한 리렌더링을 피하기 위해 useCallback 등을 사용 해야함.


      props.children
      태그사이의 내용을 보여주는 children
      컴포넌트의 내부에 포함된 요소를 렌더링

      */}
      <Box>김태완</Box>
      <Box name="네임" title="크크크">김태화</Box>
      <Box>김투화</Box>
    </div>
  )
}

export default App