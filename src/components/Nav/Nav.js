import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route, Link, Router } from 'react-router-dom'


function Nav() {
    return (
        <header className='Nav'>
            <h1>
                Hard Enduro</h1>
            <ul>
                <li>
                    <a>News</a>
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