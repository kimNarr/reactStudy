function Header() {
    return(
        <header>
            <div className="text">
                매장 공지사항 또는 메시지 공유하기
            </div>
            <div className="inner">
                <h1 className="logo">
                    <a href="#">
                        <img src="./ex01/img/logo.jpg" alt="" />
                    </a>
                </h1>
                <ul className="gnb">
                    <li><a href="#">상표</a></li>
                    <li><a href="#">남성</a></li>
                    <li><a href="#">여성</a></li>
                    <li><a href="#">어린이</a></li>
                    <li><a href="#">라이프스타일</a></li>
                    <li><a href="#">갤러리</a></li>
                    <li><a href="#">소식</a></li>
                </ul>
            </div>
        </header>
    )
}

export default Header;