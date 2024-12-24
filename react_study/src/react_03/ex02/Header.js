import React from 'react'

function Header() {
  return (
    <header>
        <div className="inner">
            <h1 className="logo"><a href="#">NAVER VIBE</a></h1>
            <button className="memberBtn">멤버십 구독</button>
            <div className='nav gnb'>
                <ul>
                    <li><a href="#">투데이</a></li>
                    <li><a href="#">차트</a></li>
                    <li><a href="#">최신앨범</a></li>
                    <li><a href="#">DJ 스테이션</a></li>
                    <li><a href="#">VIBE MAG</a></li>
                    <li><a href="#">이달의 노래</a></li>
                </ul>
            </div>
            <div className="nav snb">
                <ul>
                    <li><a href="#">서비스 소개</a></li>
                    <li><a href="#">내돈내듣</a></li>
                    <li><a href="#">VIBE 오디오</a></li>
                    <li><a href="#">REWIND 2024</a></li>
                    <li><a href="#">이용권 선물</a></li>
                </ul>
            </div>
            <button className="appBtn">데스크톱앱 설치</button>
        </div>
    </header>
  )
}

export default Header;
