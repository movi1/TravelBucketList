import React from 'react';
import './about-us.css';
export const AboutUs = () => {
    return (
      <div className="about-us-container">
        <div className="about-us-intro">
          <h1>Meet the people behind the app and learn about their passions!</h1>
        </div>
  
        <div className="about-us-profiles">
          <div className="profile">
            <h2>Lauren Cole</h2>
            <p>
              My favourite hobby is playing video games. I like it because:
              <ul>
                <li>It helps me relax</li>
                <li>I can do it alone</li>
              </ul>
            </p>
          </div>
  
          <div className="profile">
            <h2>Sheetal Varsani</h2>
            <p>
             I love crafting because:
              <ul>
                <li>I enjoy learning new skills</li>
                <li>Being creative relaxes me and calms my mind</li>
              </ul>
            </p>
          </div>
  
          <div className="profile">
            <h2>Moira Corradini</h2>
            <p>
              I love painting bacause:
              <ul>
                <li>It allows me to express my creativity</li>
                <li>Blending colors and seeing a painting come to life exites me</li>
              </ul>
            </p>
          </div>
  
          <div className="profile">
            <h2>Louisa Rhodes de Grey</h2>
            <p>
              I love reading bacause: 
              <ul>
                <li>It allows me to have quiet time</li>
                <li>Sometimes I read things to learn, and other times just rubbish!</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    );
  };