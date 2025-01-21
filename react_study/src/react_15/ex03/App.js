import React from 'react'
import AddTel from './component/AddTel'
import TelList from './component/TelList'

function App() {
    // 1. 왼쪽에는 연락처 등록하는 폼, 오른쪽에는 연락처 리스트와 검색창
    // 2. 리스트에 유저 이름과 전화번호를 추가 할 수 있음
    // 3. 리스트에 아이템이 몇 개인지 확인
    // 4. 사용자가 유저를 이름검색으로 찾을 수 있도록 함
    // vvvvv28.dothome.co.kr
    return (
        <div>
            <h1>연락처</h1>
            <div className='tel_wrap'>
                <AddTel />
                <TelList />
            </div>
        </div>
    )
}

export default App
    