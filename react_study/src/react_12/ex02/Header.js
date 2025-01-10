import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header>
            <div className='inner'>
                <h1 className='logo'><Link to={'/'}><img src='./yoo/img/logo.png' alt='로고이미지'/></Link></h1>
                <ul className='gnb'>
                    <li><Link to={'yoo'}>yoo youngguk</Link></li>
                    <li><Link to={'archives'}>archives</Link></li>
                    <li><Link to={'fund'}>foundation</Link></li>
                </ul>
            </div>
        </header>
    )
}

export default Header
