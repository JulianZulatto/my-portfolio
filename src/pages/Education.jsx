import React from "react";
import Row from 'react-bootstrap/Row';
import reactCert from '../resources/React-JS.png';
import javascriptCert from '../resources/javascriptCert.png';
import desarrollowebCert from '../resources/Desarrollo-Web.png';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import CardComponent from "../components/Cards/Card";


function Education() {
    return (
        <section id="education" className="container mt-5">
            <h2 className="text-center">Educacion</h2>
            <Row>
                <Col>
                    <CardComponent 
                    img={desarrollowebCert} 
                    title={"Desarrollo Web - Coderhouse"} 
                    text={"Certificado de finalización obtenido el 13 de marzo de 2024. Curso enfocado en HTML, CSS, Git y principios fundamentales del desarrollo frontend."}
                    src="#"              
                    />   
                </Col>

                <Col>
                <CardComponent 
                    img={javascriptCert} 
                    title={"JavaScript - Coderhouse"} 
                    text={"Certificado de finalización obtenido el 8 de julio de 2024. Curso centrado en lógica de programación, funciones, DOM, eventos y asincronía con JavaScript puro."}
                    src="#"              
                    />
                </Col>

                <Col>
                    <CardComponent 
                    img={reactCert} 
                    title={"React - Coderhouse"} 
                    text={"Certificado de finalización obtenido el 19 de septiembre de 2024.  Curso enfocado en el desarrollo de aplicaciones con React, JSX, estados, props, hooks y enrutamiento."}
                    src="#"              
                    />
                </Col>
            </Row>
        </section>
    )
    
};

export default Education;