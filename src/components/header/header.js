import React from 'react';
import './header.css';

export const Header = () => {
    return (
        <header>
            <div className="logo">
                <h1>PACK & GO</h1>
            </div>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/pack-your-list">Pack Your List</a></li>
                    <li><a href="/bucket-list">Bucket List</a></li>
                    <li><a href="/signup-login">Sign Up / Login</a></li>
                </ul>
            </nav>
        </header>
    );
};