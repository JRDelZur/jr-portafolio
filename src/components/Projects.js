import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const projects = [
  {
    title: 'JR Planet Web',
    description: 'Portafolio visual inspirado en estilo retrofuturista para mostrar mis proyectos de desarrollo web.',
    image: '/img/jrplanet.png',
    link: 'https://github.com/JRDelZur/JR-Planet-Web',
  },
  {
    title: 'Servidor Multimedia (Ubuntu + Docker)',
    description: 'Servidor casero con Jellyfin, qBittorrent, Sonarr, Radarr, Prowlarr, Jellyseer, VPN y más.',
    image: '/img/server.png',
    link: '#',
  },
  {
    title: 'Bot de Discord con Dashboard',
    description: 'Bot hecho en Node.js con Discord.js y panel web personalizado, alojado en servidor casero con dominio propio.',
    image: '/img/discordbot.png',
    link: '#',
  },
  {
    title: 'Sistema Web para Bar Kantaroz',
    description: 'App de gestión para bar: empleados, inventario, copeo, recetas, reportes y alertas inteligentes.',
    image: '/img/kantaroz.png',
    link: '#',
  },
  {
    title: 'Sopa de Letras Educativa',
    description: 'Generador de sopas de letras para niños con niveles y temáticas personalizadas, ideal para escuelas.',
    image: '/img/sopas.png',
    link: '#',
  },
  {
    title: 'Foro tipo Reddit sin JavaScript',
    description: 'Foro funcional con hilos, comentarios, amigos y mensajería, alojado vía Tor sin JavaScript.',
    image: '/img/foro.png',
    link: '#',
  },
  {
    title: 'Gestor de Archivos tipo Nube Personal',
    description: 'Sistema de almacenamiento casero estilo Google Drive, integrado al servidor multimedia.',
    image: '/img/nube.png',
    link: '#',
  },
  {
    title: 'Página de Música: Bacachitto Sets',
    description: 'Sitio web con tracklists de mezclas y sesiones musicales alojadas en SoundCloud.',
    image: '/img/bacachitto.png',
    link: '#',
  },
];

function Projects() {
  return (
    <Container id="projects" className="my-5 text-white">
      <h2 className="text-center mb-4">Mis Proyectos</h2>
      <Row>
        {projects.map((project, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card bg="dark" text="white" className="h-100 shadow-lg">
              <Card.Img variant="top" src={project.image} alt={project.title} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Button variant="primary" href={project.link} target="_blank" rel="noopener noreferrer">
                  Ver más
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;
