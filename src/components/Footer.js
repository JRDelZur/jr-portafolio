import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="custom-footer text-center py-4 mt-5" style={{ background: '#111' }}>
      <Container>
        <p>© {new Date().getFullYear()} JRDelZur - Todos los derechos reservados</p>
        <p>
          <a href="https://github.com/JRDelZur" target="_blank" rel="noopener noreferrer">GitHub</a> | 
          <a href="mailto:tuemail@ejemplo.com"> Correo</a>
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
