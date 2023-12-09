import React from "react";

import "./footer.css";

const facebook_icon = process.env.PUBLIC_URL + "/facebook_icon.png";
const instagram_icon = process.env.PUBLIC_URL + "/instagram_icon.png";
const email_icon = process.env.PUBLIC_URL + "/email_icon.png";




export const Footer = () => {

  const facebookLink = 'https://www.facebook.com/';
  const instagramLink = 'https://www.instagram.com/';

  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href={facebookLink} target="_blank" rel="noopener noreferrer">
          <img
            className="social-icon"
            src={facebook_icon}
            alt="Facebook Icon"
          />
        </a>
        <a href={instagramLink} target="_blank" rel="noopener noreferrer">
        <img
          className="social-icon"
          src={instagram_icon}
          alt="Instagram Icon"
        />
        </a>
        <img className="social-icon" src={email_icon} alt="Email Icon" />
      </div>
      <div className="copyright">
        <p>Copyright © Pack & Go Inc 2023</p>
      </div>
    </footer>
  );
};
