import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


function Header() {
  return (
    <Navbar className='fixed-top' expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <a href='#about' className="nav-link">
              About
            </a>             
            <a href="#project" className="nav-link">
              Project
            </a>
            <a href="#skills" className="nav-link">
              Skills
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </Nav>
        </Navbar.Collapse>

        <a className="navbar-brand" href="#">
          <img src="logo2.jfif" alt="img" height="36" width='54' className="rounded-circle" />

          <a
            className="btn line-btn-dark text-dark btn btn-light btn-icon btn-radius ms-4"
            href="cv.pdf"
            title=""
            download='cv.pdf'
          >
            Download Resume
          </a>
        </a>
      </Container>
    </Navbar>
  );
}

export default Header;
