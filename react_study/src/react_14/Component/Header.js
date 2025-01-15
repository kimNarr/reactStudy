import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircleUser} from '@fortawesome/free-solid-svg-icons'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import {Link, useNavigate } from 'react-router-dom'

function Header({loginOk}) {

    const menu = ["T-shirts","Tops","Shirts","Sweats","Coats & Jackets","Pants"];

    const navigate = useNavigate()

    const goToLogin = ()=>{
        navigate("/login")
    }

    const search = (event) => {
        if(event.key === "Enter") {
            let keyword = event.target.value
            navigate(`/?q=${keyword}`)
        }
    }

    return (
        <header>
            <div className='login'>
                <div onClick={goToLogin}>
                    <FontAwesomeIcon icon={faCircleUser} className='icon'/>
                    {
                        loginOk === false ? <p>로그인</p> : <p>로그아웃</p>
                    }
                </div>
            </div>
            <div className='logo'>
                <h1>
                    <Link to={"/"}>
                        <img src='https://aape.jp/client_info/AAPE/view/userweb/images/logo.png' alt='logo' />
                    </Link>
                </h1>
            </div>
            <div className='nav'>
                <ul>
                    {
                        menu.map((item, idx)=> (
                            <li key={idx}>{item}</li>
                        ))
                    }
                </ul>
                <div className='search'>
                    <input type="text" onKeyPress={(event)=> search(event)}/>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='icon' />
                </div>
            </div>
        </header>
    )
}

export default Header
