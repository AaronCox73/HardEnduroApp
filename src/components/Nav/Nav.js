import React from 'react'
import './App.css';
import { Link, NavLink } from 'react-router-dom'


function Nav() {
    return (
        <nav className='Nav'>

            <NavLink to="/" style={{ textDecoration: 'none' }} >
                <h1 className="Logo">Hard Enduro</h1>
            </NavLink>
            <ul>
                <Link to='/News' style={{ textDecoration: 'none' }}>
                    <li>News</li>
                </Link>
            </ul>
            <ul>
                <li><a>Videos</a></li>

            </ul>
            <ul>
                <li>Tutorials</li>

            </ul>
            <ul>
                <li>Login</li>

            </ul>
            <ul>

                <li>Sign Up</li>
            </ul>

        </nav>

    );
}

export default Nav;