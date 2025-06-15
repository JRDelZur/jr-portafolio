import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

function CustomNavbar() {
  return (
    <Navbar expand="lg" className="custom-navbar sticky-top" variant="dark" >
      <Container>
        <Navbar.Brand href="#">JR Portafolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#">Inicio</Nav.Link>
            <Nav.Link href="#projects">Proyectos</Nav.Link>
            <Nav.Link href="#about">Sobre mí</Nav.Link>
            <Nav.Link href="#contact">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
