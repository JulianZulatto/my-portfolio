import React from 'react';
import { Container } from 'react-bootstrap';

function About() {
    return (
        <Container>
            <section id="about">
                <h2 className='fw-bold text-center' style={{ color: "#55e6a5" }}>Sobre mi</h2>
                <p style={{ color: "#ffffff" }}>Soy Desarrollador Frontend con foco en React y orientación a sistemas de gestión y backoffice.

                    Provengo de un background de más de 9 años en operaciones y finanzas, lo que me permite comprender en profundidad los procesos administrativos y contables que suelen implementar los sistemas de gestión.

                    He participado en el desarrollo de aplicaciones web orientadas a la gestión, trabajando con React y tecnologías modernas del ecosistema frontend.

                    Actualmente busco incorporarme a un equipo como Frontend Developer, donde pueda seguir creciendo técnicamente, aportar criterio de negocio y adaptarme a nuevas tecnologías según las necesidades del proyecto.</p>
                <p style={{ color: "#ffffff" }}>Si bien mi stack principal es React, estoy abierto a incorporar nuevas herramientas y tecnologías cuando el proyecto lo requiere, apoyándome en una base sólida de JavaScript y buenas prácticas de desarrollo.</p>
            </section>
        </Container>
    )
}

export default About;