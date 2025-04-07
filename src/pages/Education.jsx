import React from "react";
import Row from 'react-bootstrap/Row';
import reactCert from '../resources/React-JS.png';
import javascriptCert from '../resources/javascriptCert.png';
import desarrollowebCert from '../resources/Desarrollo-Web.png';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';


function Education() {
    return (
        <section id="education" className="container mt-5">
            <h2 className="text-center">Educacion</h2>
            <Row>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={desarrollowebCert} />
                        <Card.Body>
                            <Card.Title>Desarrollo Web - Coderhouse</Card.Title>
                            <Card.Text>
                                Certificado de finalización obtenido el 13 de marzo de 2024.
                                Curso enfocado en HTML, CSS, Git y principios fundamentales del desarrollo frontend.
                            </Card.Text>
                            <Button variant="primary">Ver Certificado</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={javascriptCert} />
                        <Card.Body>
                            <Card.Title>JavaScript - Coderhouse</Card.Title>
                            <Card.Text>
                                Certificado de finalización obtenido el 8 de julio de 2024.
                                Curso centrado en lógica de programación, funciones, DOM, eventos y asincronía con JavaScript puro.
                            </Card.Text>
                            <Button variant="primary">Ver Certificado</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={reactCert} />
                        <Card.Body>
                            <Card.Title>React - Coderhouse</Card.Title>
                            <Card.Text>
                                Certificado de finalización obtenido el 19 de septiembre de 2024.
                                Curso enfocado en el desarrollo de aplicaciones con React, JSX, estados, props, hooks y enrutamiento.
                            </Card.Text>
                            <Button variant="primary">Ver Certificado</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </section>
    )
};

export default Education;