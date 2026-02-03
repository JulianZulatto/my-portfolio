import { Col, Image, Row, Dropdown, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import JulianImg from "../resources/20231021_162320.jpg"
import { useState } from 'react';
import ModalComponent from '../components/Modals/ModalComponent';

function Julian() {
    const [showModal, setShowModal] = useState(false);
    const [showContent, setShowContent] = useState("");

    const handleModalOpen = (content) => {
        setShowModal(true)
        setShowContent(content)
    }

    const handleModalClose = () => {
        setShowModal(false)
        setShowContent("")
    }

    return (
        <section id="Julian">
            <Container>
                <Row>
                    <Col xs={12} md={6} className='d-flex align-items-center flex-column'>
                        <Row>
                            <Col className='d-flex flex-column align-items-center mt-5 '>
                                <h1 className="text-white text-center fs-1 fs-md-1">
                                    Soy <span style={{ color: "#55e6a5" }}>[Julian Zulatto]</span>
                                </h1>

                                <h2 className="text-white text-center fs-3 fs-md-3">
                                    Desarrollador Front-End
                                </h2>

                                <h4 className="text-white text-center fs-5 fs-md-5">
                                    Bienvenido a mi Portfolio
                                </h4>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} className='d-flex flex-column flex-md-row align-items-center gap-5 align-items-stretch mt-5'>

                                <div className="w-100">
                                    <Dropdown>
                                        <Dropdown.Toggle
                                            variant="secondary"
                                            id="dropdown-basic"
                                            className='rounded-3 p-2 '
                                            style={{ height: "60px", backgroundColor: "#55e6a5", color: "#000000", border: "none", boxShadow: "none" }}
                                        >
                                            Descargar CV
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item
                                                className="border-radius rounded-3 p-2 download-btn-hover"
                                                href="/CV_Julian_Zulatto.pdf"
                                                download="CV_Julian_Zulatto.pdf"

                                            >
                                                CV en Español (PDF)
                                            </Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item
                                                className="border-radius rounded-3 p-2 download-btn-hover"
                                                href="/Julian_Zulatto_CV_English.pdf"
                                                download="Julian_Zulatto_CV_English.pdf"
                                            >
                                                CV en Ingles (PDF)
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>

                                <div className="w-100 pb-3">
                                    <Button
                                        onClick={() => handleModalOpen("video")}
                                        style={{ height: "60px", backgroundColor: "#55e6a5", color: "#000000", border: "none", boxShadow: "none" }}
                                        className='border-radius rounded-3 p-2 w-100 w-md-auto'>
                                        Ver Video de Presentacion
                                    </Button>
                                </div>
                            </Col>

                        </Row>
                    </Col>
                    <Col xs={12} md={6} className='d-flex justify-content-center'>
                        <Image
                            src={JulianImg}
                            roundedCircle
                            fluid
                            style={{ width: "300px", height: "450px", objectFit: "cover" }}
                        />
                    </Col>
                </Row>
                <ModalComponent show={showModal} onClose={handleModalClose}>
                    {showContent === "video" && (
                        <div className="ratio ratio-16x9">
                            <iframe
                                src="https://player.vimeo.com/video/1161471428?autoplay=1&badge=0&autopause=0"
                                allow="autoplay; fullscreen; picture-in-picture"
                                allowFullScreen
                                title="Video_postulacion"
                                style={{ borderRadius: "12px" }}
                            />
                        </div>
                    )}
                </ModalComponent>
            </Container >
        </section >
    )
};

export default Julian;