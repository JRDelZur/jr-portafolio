import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

function About() {
  return (
    <Container id="about" className="my-5 text-white">
      <Row className="align-items-center">
        <Col md={4} className="text-center mb-4 mb-md-0">
          <Image 
            src="/img/profile.jpg" 
            roundedCircle 
            fluid 
            style={{ maxWidth: '250px', border: '5px solid #fff' }}
            alt="Foto de perfil"
          />
        </Col>
        <Col md={8}>
          <h2 className="mb-3">Sobre mí</h2>
          <p>
            ¡Hola! Soy Ronni Delgado, desarrollador web y entusiasta de la tecnología. Me apasiona crear soluciones creativas, ya sea a través de plataformas educativas, sistemas de gestión o proyectos personales como bots de Discord y servidores caseros.
          </p>
          <p>
            Tengo experiencia con tecnologías como React, Node.js, Python, Docker y Linux. También he trabajado en proyectos sin JavaScript para el entorno Tor, y me encanta experimentar con interfaces personalizadas y estéticas retro.
          </p>
          <p>
            Siempre estoy aprendiendo y explorando nuevas herramientas para mejorar mis desarrollos y ofrecer experiencias únicas.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
