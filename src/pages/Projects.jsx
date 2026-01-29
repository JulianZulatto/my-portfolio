import CardComponent from "../components/Cards/CardComponent";
import ToDoImage from "../resources/to-do-list-react.png";
import ArgosSystemImage from "../resources/argosSystem.png";
import LaCumplidoraImage from "../resources/LaCumplidora.png";
import CanchaLlenaImage from "../resources/canchaLlena.jpeg";
import { Col, Row } from "react-bootstrap";

function Projects() {

    const ToDoUrl = "https://to-do-list-react-xi-azure.vercel.app/";
    const ArgosSystemUrl = "https://argos-system.vercel.app/";
    const LaCumplidoraUrl = "https://la-cumplidora.vercel.app/";
    const CanchaLlenaUrl = "https://cancha-llena.com";


    const handleClickTodo = () => {
        window.open(ToDoUrl, "_blank");
    };

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
            <h2 className="text-center" style={{ color: "#22D3EE" }}>Proyectos</h2>

            <Row>
                <Col>
                    <CardComponent
                        img={CanchaLlenaImage}
                        title={"Cancha Llena"}
                        text={"Sistema Web"}
                        onButtonClick={handleClickCanchaLlena}
                        name={"Ver Proyecto"}
                    />
                </Col>

                <Col>
                    <CardComponent
                        img={ArgosSystemImage}
                        title={"Argos System"}
                        text={"ERP realizado con Javascript, React, CoreUI y Firestore."}
                        onButtonClick={handleClickArgos}
                        name={"Ver Proyecto"}
                    />
                </Col>

                <Col>
                    <CardComponent
                        img={LaCumplidoraImage}
                        title={"La Cumplidora"}
                        text={"Landing Page Publicitaria, realizada con Javascript, React, y Tailwind."}
                        onButtonClick={handleClickLaCumplidora}
                        name={"Ver Proyecto"}
                    />
                </Col>

                <Col>
                    <CardComponent
                        img={ToDoImage}
                        title={"To Do List"}
                        text={"To Do List con React."}
                        onButtonClick={handleClickTodo}
                        name={"Ver Proyecto"}
                    />
                </Col>
            </Row>

        </section>

    );
}

export default Projects;
