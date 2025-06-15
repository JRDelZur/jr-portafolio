import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function Header() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Detecta scroll para mostrar u ocultar el navbar
  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setShow(false); // Oculta al bajar
    } else {
      setShow(true); // Muestra al subir
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <Navbar
      expand="lg"
      className={`custom-navbar ${show ? 'navbar-visible' : 'navbar-hidden'}`}
      variant="dark"
      fixed="top"
    >
      <Container>
        <Navbar.Brand href="#home">JRDelZur</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#projects">Proyectos</Nav.Link>
            <Nav.Link href="#about">Sobre mí</Nav.Link>
            <Nav.Link href="#contact">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
