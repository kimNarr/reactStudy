import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <div>
      <h2><Link to={'/'}>메인</Link></h2>
      <ul>
        <li><Link to={'/about'}>About</Link></li>
        <li><Link to={'/product'}>Product</Link></li>
      </ul>
    </div>
  )
}

export default Nav
