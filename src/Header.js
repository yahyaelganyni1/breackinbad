import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='header'>
            <Link to='/'>
                <h1> Breaking Bad characters </h1>
            </Link>
        </header>
    )
}

export default Header