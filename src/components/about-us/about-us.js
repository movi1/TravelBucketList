import React from 'react';
import './about-us.css';

export const AboutUs = () => {
    return (
        <div className='about-us main-container'>
            <h1>About us!</h1>

            <h2>Lauren Cole</h2>
            <p>My favourite hobby is playing video games. I like it because:
                <ul>
                    <li>It helps me relax</li>
                    <li>I can do it alone</li>
                </ul>
            </p>

            <br />

            <h2>Sheetal Varsani</h2>
            <p>I love crafting because:
                <ul>
                    <li>I enjoy learning new skills</li>
                    <li>Being creative relaxes me and calms my mind</li>
                </ul>
            </p>
        </div>
    );
};