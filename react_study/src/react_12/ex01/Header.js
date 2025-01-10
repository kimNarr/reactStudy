import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <ul>
        <li><Link to={'/'}>app</Link></li>
        <li><Link to={'/sub'}>sub</Link></li>
      </ul>
    </header>
  )
}

export default Header
