import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
  const [user] = useAuthState(auth)

  const handleSignOut = () => {
    signOut(auth);
  }

    return (
       <Navbar collapseOnSelect sticky="top" expand="lg" bg="primary" variant="dark" >
  <Container>
  <Navbar.Brand as={Link} to="/">
    <img height={30} src="https://www.designfreelogoonline.com/wp-content/uploads/2020/08/00422-car-01.png" alt="" /> <span className='ps-1 pe-4'>Genius Car Services</span>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/home#services">Services</Nav.Link>
      <Nav.Link href="/home#experts">Experts</Nav.Link>
      <NavDropdown title="Engineers" id="collasible-nav-dropdown">
        <NavDropdown.Item href="https://github.com/robert" target="_blank">Robert</NavDropdown.Item>
        <NavDropdown.Item href="https://github.com/john" target="_blank">John</NavDropdown.Item>
        <NavDropdown.Item href="https://github.com/kiron0" target="_blank">Kiron</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4"></NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link as={Link} to="/about">About</Nav.Link>
      {
        user && <>
          <Nav.Link as={Link} to="/addService">Add</Nav.Link>
          <Nav.Link as={Link} to="/manageServices">Manage</Nav.Link>
        </>
      }
     {
     user ? 
       <button className='btn btn-link text-decoration-none text-white' onClick={handleSignOut}>Sign Out</button>
       :
     <Nav.Link eventKey={2} as={Link} to="/login">
        Login
      </Nav.Link>}
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;