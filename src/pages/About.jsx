import React from 'react';
import { Container } from 'react-bootstrap';

function About() {
    return (
        <Container className="d-flex align-items-center flex-column mt-4">
            <section id="about" className="d-flex align-items-center flex-column" style={{maxWidth: "800px"}}>
                <h2 className='fw-bold text-center' style={{ color: "#55e6a5" }}>Sobre mi</h2>
                <p style={{ color: "#ffffff" }}>Soy Desarrollador Frontend con foco en React y JavaScript, orientado a sistemas de gestión y aplicaciones de negocio.</p>
                <strong>Lo que puedo aportar:</strong>
                <ul>
                    <li>Desarrollo de interfaces con React y JavaScript.</li>
                    <li>Comprensión de procesos administrativos, operativos y financieros.</li>
                    <li>Experiencia trabajando con sistemas de gestión, backoffice y flujos internos.</li>
                    <li>Capacidad para adaptar nuevas herramientas y tecnologías según las necesidades del proyecto.</li>
                    <li>Interés en seguir creciendo como Frontend Developer dentro de equipos de desarrollo.</li>
                </ul>
                <p style={{ color: "#ffffff" }}>
                    Actualmente busco una oportunidad como Frontend Developer Jr donde pueda seguir creciendo técnicamente, aportar mi experiencia en procesos de negocio y colaborar en el desarrollo de productos reales.
                </p>

            </section>
        </Container>
    )
}

export default About;