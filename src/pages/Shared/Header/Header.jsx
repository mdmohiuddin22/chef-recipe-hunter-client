/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
           <div> <h2 className='text-center fw-bold '>Khabar Ghor</h2></div>
           <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#features">Khabar Ghor</Nav.Link>
            <Link to="/"><Nav.Link href="#pricing">Home</Nav.Link></Link>
          <Link to="/blog"> <Nav.Link href="#pricing">Blog</Nav.Link></Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Profile</Nav.Link>
            <Link to="/login"><Nav.Link eventKey={2} href="#memes">
            <Button variant="secondary">Login</Button>
            </Nav.Link></Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;