import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../Header/Header.css'

import Lua from '../../assets/Luaicon.png'

const Header = () => {
  return (
    <Navbar expand="lg" className="Customnavbar navbar-dark">
    <Container>
      <Navbar.Brand href="#home"><img className='Logoheader' src={Lua} alt="" /></Navbar.Brand> 
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Nosotros</Nav.Link>
          <NavDropdown title="Trabajos" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#link">Contacto</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header