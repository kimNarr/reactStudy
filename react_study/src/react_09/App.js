import React from 'react'
import './css/App.css'

function App() {
  return (
    <div>
        {/* 
            CSS의 전처리기, CSS 보다 더 활용이 좋은 고급기능제공
            스타일 작성의 효율성과 유지보수성을 높임

            SASS : 들여쓰기 기반 문법 >> {}, ; 사용하지않음
            SCSS : CSS와 유사한 문법 >> {}, ; 사용

            SASS문법
            ul
            padding: 0
            margin: 0
                li
                padding: 0
                margin: 0

            SCSS문법
            ul {
                padding: 0;
                margin: 0;

                li {
                    padding: 0;
                    margin: 0;

                    &:first-child {
                        // 선택자
                    }
                }
            }

            1. 설치 npm install -g sass
            2. SCSS, CSS생성
            3. 컴파일 : SCSS와 CSS연결 : sass App.scss App.css
            4. 파일 변경시 자동으로 컴파일 : sass --watch App.scss App.css

            scss > 중첩 html 구조와 유사하게 스타일 중첩으로 작성

        */}
      <h2>Scss사용</h2>
      <div className='Allbox'>
        <div className='box'>
            <div className='item'></div>
        </div>
        <div className='box'></div>
        <div className='box'></div>
      </div>
        <button type='button' className='pbtn'>p버튼</button>
        <button type='button' className='cbtn'>c버튼</button>

        <div className='contents'></div>

        <div className='fbox'>
            안녕하세요
        </div>
    </div>
  )
}

export default App
