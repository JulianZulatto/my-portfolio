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
                        text={"Sistema Web"}
                        onButtonClick={handleClickCanchaLlena}
                        name={"Ver Proyecto"}
                    />
                </Col>

                <Col xs={12} md={4} className='mb-3'>
                    <CardComponent
                        img={ArgosSystemImage}
                        title={"Argos System"}
                        text={"ERP realizado con Javascript, React, CoreUI y Firestore."}
                        onButtonClick={handleClickArgos}
                        name={"Ver Proyecto"}
                    />
                </Col>

                <Col xs={12} md={4} className='mb-3'>
                    <CardComponent
                        img={LaCumplidoraImage}
                        title={"La Cumplidora"}
                        text={"Landing Page Publicitaria, realizada con Javascript, React, y Tailwind."}
                        onButtonClick={handleClickLaCumplidora}
                        name={"Ver Proyecto"}
                    />
                </Col>
            </Row>

        </section>

    );
}

export default Projects;
