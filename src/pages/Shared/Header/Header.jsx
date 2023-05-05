/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container >
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#features"><h2 className='text-decoration-none '>Khabar Ghor</h2></Nav.Link>
              <Link to="/"><Nav.Link href="#pricing"><h4 >Home</h4></Nav.Link></Link>
              <Link to="/chefs"><Nav.Link href="#pricing"><h4>Chefs Info</h4></Nav.Link></Link>
              <Link to="/blog"> <Nav.Link href="#pricing"><h4>Blog</h4></Nav.Link></Link>
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