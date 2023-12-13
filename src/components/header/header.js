import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./header.css";

// Header component
export const Header = () => {
  return (
    <Navbar className="custom-navbar" expand="lg" variant="dark">
      <Container className="header-container">
        {/* Brand Logo & Title */}
        <Nav className="align-items-center me-auto">
          <div className="navbar-brand-wrapper ms-auto">
            <div className="navbar-brand">
              <img
                src="./images/logo.png"
                height="100"
                alt="Pack and Go Logo"
              />
              <div>
                <h1 className="title">Pack & Go</h1>
              </div>
            </div>
          </div>
        </Nav>

        {/* Navigation Links */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/pack-list">Pack List</Nav.Link>
            <Nav.Link href="/bucket-list">Bucket List</Nav.Link>
            <Nav.Link href="/faqs">FAQs</Nav.Link>
            <Nav.Link href="/signup-login">Sign Up/Login</Nav.Link>
            <Nav.Link href="/contact-us">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
