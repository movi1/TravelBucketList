import React from 'react';
import './header.css';

export const Header = () => {
    return (
        <header>
            <div className="header-container">
                <div className="logo">
                    <img src="./images/logo-backpack.png" alt="" style={{ width: '90px' }} />
                </div>
                <h1 style={{ fontSize: '2em', margin: '0' }}>PACK & GO</h1>
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