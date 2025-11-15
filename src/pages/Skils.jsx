import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import reactIcon from "../resources/react.png";
import jsIcon from "../resources/javascript.png";
import htmlIcon from "../resources/html.png";
import cssIcon from "../resources/css.png";
import bootstrapIcon from "../resources/BootstrapIcon.png";
import coreUiIcon from "../resources/coreUI.png";
import gitHubIcon from "../resources/git-hub.webp";
import vercelIcon from "../resources/vercel.png"

function Skils() {
    return (
        <section id="skills" className="container mt-5">
            <h2 className="text-center mb-4" style={{ color: "#22D3EE" }}>Mis Habilidades</h2>
            <Container>
                <Row className='justify-content-center mb-4'>

                    <Col xs={6} sm={4} md={3} lg={3} className='text-center'>
                        <Image src={reactIcon} style={{ width: "100px", height: "100px" }} />
                        <h4 style={{ color: "#22D3EE" }}>React Js</h4>
                    </Col>

                    <Col xs={6} sm={4} md={3} lg={3} className='text-center'>
                        <Image src={jsIcon} style={{ width: "100px", height: "100px" }} />
                        <h4 style={{ color: "#22D3EE" }}>JavaScript</h4>
                    </Col>

                    <Col xs={6} sm={4} md={3} lg={3} className='text-center'>
                        <Image src={htmlIcon} style={{ width: "100px", height: "100px" }} />
                        <h4 style={{ color: "#22D3EE" }}>HTML5</h4>
                    </Col>

                    <Col xs={6} sm={4} md={3} lg={3} className='text-center'>
                        <Image src={cssIcon} style={{ width: "100px", height: "100px" }} />
                        <h4 style={{ color: "#22D3EE" }}>CSS</h4>
                    </Col>

                    <Col xs={6} sm={4} md={3} lg={3} className='text-center'>
                        <Image src={bootstrapIcon} style={{ width: "100px", height: "100px" }} />
                        <h4 style={{ color: "#22D3EE" }}>Bootstrap</h4>
                    </Col>

                    <Col xs={6} sm={4} md={3} lg={3} className='text-center'>
                        <Image src={coreUiIcon} style={{ width: "100px", height: "100px" }} />
                        <h4 style={{ color: "#22D3EE" }}>CoreUI</h4>
                    </Col>

                    <Col xs={6} sm={4} md={3} lg={3} className='text-center'>
                        <Image src={gitHubIcon} style={{ width: "100px", height: "100px" }} />
                        <h4 style={{ color: "#22D3EE" }}>GitHub</h4>
                    </Col>

                    <Col xs={6} sm={4} md={3} lg={3} className='text-center'>
                        <Image src={vercelIcon} style={{ width: "100px", height: "100px" }} />
                        <h4 style={{ color: "#22D3EE" }}>Vercel</h4>
                    </Col>

                </Row>
            </Container>
        </section>
    )
}

export default Skils;