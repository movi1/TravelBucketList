import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './header.css'; 

export const Header = () => {
  return (
    <Navbar className="custom-navbar" expand="lg"  variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="./images/logo1.svg"
            alt="logo"
            style={{ height: '50px' }}
          />
          <h1 className="title">PACK & GO</h1>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/pack-list">Pack List</Nav.Link>
            <Nav.Link href="/bucket-list">Bucket List</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;


