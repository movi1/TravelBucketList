import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './header.css'; 

export const Header = () => {
 
    return (
      <Navbar className="custom-navbar" expand="lg" variant="dark">
        <Container>
        <Nav className="align-items-center">
    <div className="navbar-brand-wrapper">
      <div className="navbar-brand">
        <img src="./images/logo1.svg" height="70" alt="Logo"/>
        
        <div>  
          <h1 className="title">Pack & Go</h1> 
        </div>
      </div>
    </div>
  </Nav>
    
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/pack-list">Pack List</Nav.Link>
              <Nav.Link href="/bucket-list">Bucket List</Nav.Link>
              <Nav.Link href="/signup-login">Sign Up / Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;


