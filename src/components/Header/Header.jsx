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
          <Nav.Link href="#MAINX">Home</Nav.Link>
          <Nav.Link href="#QUIENES">Nosotros</Nav.Link>
          <Nav.Link href="#TRABAJOS">Trabajos</Nav.Link>
          <Nav.Link href="#CONTACTOX">Contacto</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header