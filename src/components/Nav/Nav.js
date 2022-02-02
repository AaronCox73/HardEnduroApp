import React from 'react'
import './App.css';
import { Link } from 'react-router-dom'


function Nav() {
    return (
        <header className='Nav'>
            <h1>
                <Link to="/"> Hard Enduro</Link>
            </h1>
            <ul>
                <li>
                    <Link to='/News'> News</Link>
                </li>

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

        </header>

    );
}

export default Nav;