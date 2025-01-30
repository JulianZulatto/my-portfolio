import React from 'react';
import image from "../resources/20231021_162320.jpg"
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import reactIcon from "../resources/react.png";
import jsIcon from "../resources/javascript.png";
import htmlIcon from "../resources/html.png";
import cssIcon from "../resources/css.png";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import reactCert from '../resources/React-JS.png';
import javascriptCert from '../resources/javascriptCert.png';
import desarrollowebCert from '../resources/Desarrollo-Web.png';

function Home() {
    return (
        <div>
            <section id="about" className="container text-center mt-5">
                <h1>Hola, soy [Julian Zulatto]</h1>
                <p>Desarrollador Front-end React</p>
                <img src={image} alt="Tu foto" style={{ width: "200px", height: "300px" }} />
                <p>Soy Julian Zulatto, un analista contable con 7 años de experiencia en la gestión administrativa de un corralón de materiales de construcción. Durante este tiempo, he desempeñado una variedad de funciones que van desde la atención al cliente hasta la administración de sistemas informáticos y la coordinación de proveedores.

                    En 2023, decidí explorar nuevas oportunidades y me adentré en el mundo de la programación con Python y Javascript. Desde entonces, me he comprometido a convertirme en un desarrollador experto, dedicándome a una formación continua y a la actualización constante en las últimas tecnologías.

                    Estoy entusiasmado por unirme a un equipo dinámico donde pueda aplicar las habilidades que estoy adquiriendo y enriquecerme con la práctica y la experiencia compartida.</p>
            </section>

            <section id="skills" className="container mt-5">
                <h2 className="text-center">Mis Habilidades</h2>
                <Container>
                    <Row>
                        <Col xs={6} md={3} style={{ textAlign: "center" }}>
                            <Image src={reactIcon} style={{ width: "200px", height: "200px" }} />
                            <h4>React Js</h4>
                        </Col>
                        <Col xs={6} md={3} style={{ textAlign: "center" }}>
                            <Image src={jsIcon} style={{ width: "200px", height: "200px" }} />
                            <h4>JavaScript</h4>
                        </Col>
                        <Col xs={6} md={3} style={{ textAlign: "center" }}>
                            <Image src={htmlIcon} style={{ width: "200px", height: "200px" }} />
                            <h4>HTML5</h4>
                        </Col>
                        <Col xs={6} md={3} style={{ textAlign: "center" }}>
                            <Image src={cssIcon} style={{ width: "200px", height: "200px" }} />
                            <h4>CSS</h4>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section id="education" className="container mt-5">
                <h2 className="text-center">Educacion</h2>


                <Row>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={desarrollowebCert} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={javascriptCert} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={reactCert} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Row>


            </section>

            <section id="projects" className="container mt-5">
                <h2 className="text-center">Mis Proyectos</h2>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <img src="proyecto1.jpg" className="card-img-top" alt="Proyecto 1" />
                            <div className="card-body">
                                <h5 className="card-title">Proyecto 1</h5>
                                <p className="card-text">Descripción corta del proyecto.</p>
                                <a href="https://github.com/tuusuario/proyecto1" className="btn btn-primary">Ver Proyecto</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;