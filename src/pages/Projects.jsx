import CardComponent from "../components/Cards/CardComponent";
import ArgosSystemImage from "../resources/argosSystem.png";
import LaCumplidoraImage from "../resources/LaCumplidora.png";
import CanchaLlenaImage from "../resources/canchaLlena.jpeg";
import { Col, Row } from "react-bootstrap";

function Projects() {

    const ArgosSystemUrl = "https://argos-system.vercel.app/";
    const LaCumplidoraUrl = "https://la-cumplidora.vercel.app/";
    const CanchaLlenaUrl = "https://cancha-llena.com";

    const handleClickArgos = () => {
        window.open(ArgosSystemUrl, "_blank");
    };

    const handleClickLaCumplidora = () => {
        window.open(LaCumplidoraUrl, "_blank");
    };

    const handleClickCanchaLlena = () => {
        window.open(CanchaLlenaUrl, "_blank");
    };

    return (
        <section id="projects" className="container mt-5">
            <h2 className="text-center" style={{ color: "#55e6a5" }}>Proyectos</h2>

            <Row>
                <Col xs={12} md={4} className='mb-3'>
                    <CardComponent
                        img={CanchaLlenaImage}
                        title={"Cancha Llena"}
                        text={"Sistema web de reservas de canchas. Colaboré en la etapa final del proyecto, implementando mejoras en frontend, ajustando flujos de reserva e integrando funcionalidades en backend mediante trabajo guiado con IA."}
                        onButtonClick={handleClickCanchaLlena}
                        name={"Ver Proyecto"}
                    />
                </Col>

                <Col xs={12} md={4} className='mb-3'>
                    <CardComponent
                        img={ArgosSystemImage}
                        title={"Argos System"}
                        text={"Sistema de gestión desarrollado con React y Firestore para administrar clientes, productos, stock y ventas mediante una interfaz web."}
                        onButtonClick={handleClickArgos}
                        name={"Ver Proyecto"}
                    />
                </Col>

                <Col xs={12} md={4} className='mb-3'>
                    <CardComponent
                        img={LaCumplidoraImage}
                        title={"La Cumplidora"}
                        text={"Landing page desarrollada para una distribuidora de agua y soda, orientada a prestar servicios y facilitar el contacto con potenciales clientes."}
                        onButtonClick={handleClickLaCumplidora}
                        name={"Ver Proyecto"}
                    />
                </Col>
            </Row>

        </section>

    );
}

export default Projects;
