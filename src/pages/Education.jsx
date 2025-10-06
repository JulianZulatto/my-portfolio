import Row from 'react-bootstrap/Row';
import reactCert from '../resources/React-JS.png';
import javascriptCert from '../resources/javascriptCert.png';
import desarrollowebCert from '../resources/Desarrollo-Web.png';
import Col from 'react-bootstrap/Col';
import CardComponent from "../components/Cards/CardComponent";
import { useState } from 'react';
import ModalComponent from '../components/Modals/ModalComponent';



function Education() {

    const[modalVisible, setModalVisible] = useState(false);

    const[currentImageSrc, setCurrentImageSrc] = useState("");

    const handleModalOpen =(src)=>{
        setCurrentImageSrc(src);
        setModalVisible(true);
    };

    const handleModalClose = () =>{
        setModalVisible(false);
        setCurrentImageSrc("");
    }



    return (
        <section id="education" className="container mt-5">
            <h2 className="text-center" style={{color:"#22D3EE"}}>Educacion</h2>
            <Row>
                <Col>
                    <CardComponent 
                    img={desarrollowebCert} 
                    title={"Desarrollo Web - Coderhouse"} 
                    text={"Certificado de finalización obtenido el 13 de marzo de 2024. Curso enfocado en HTML, CSS, Git y principios fundamentales del desarrollo frontend."}
                    onButtonClick={()=>{handleModalOpen(desarrollowebCert)}}             
                    />  
                </Col>

                <Col>
                <CardComponent 
                    img={javascriptCert} 
                    title={"JavaScript - Coderhouse"} 
                    text={"Certificado de finalización obtenido el 8 de julio de 2024. Curso centrado en lógica de programación, funciones, DOM, eventos y asincronía con JavaScript puro."}
                    onButtonClick={()=>{handleModalOpen(javascriptCert)}}              
                    />
                </Col>

                <Col>
                    <CardComponent 
                    img={reactCert} 
                    title={"React - Coderhouse"} 
                    text={"Certificado de finalización obtenido el 19 de septiembre de 2024.  Curso enfocado en el desarrollo de aplicaciones con React, JSX, estados, props, hooks y enrutamiento."}
                    onButtonClick={()=>{handleModalOpen(reactCert)}}              
                    />
                </Col>
            </Row>
            <ModalComponent
            show={modalVisible}
            onClose={handleModalClose}
            src={currentImageSrc}
            />
        </section>
    )
    
};

export default Education;