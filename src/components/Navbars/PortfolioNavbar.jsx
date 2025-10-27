import {
    Container,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarToggle,
    NavLink,
    Dropdown
} from "react-bootstrap";
import image from "../../resources/20231021_162320.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DownloadHover.css";

export default function PortfolioNavBar() {
    return (
        <Navbar
            expand="lg"
            className="sticky-top"
            style={{ backgroundColor: "#64748B" }}
            variant="dark"
        >
            <Container className="align-items-center">
                <NavbarBrand href="#Julian">
                    <img
                        src={image}
                        alt="Tu Foto"
                        className="rounded-circle me-2"
                        style={{
                            width: "80px",
                            height: "80px",
                            objectFit: "cover",
                            imageRendering: "auto",
                        }}
                    />
                </NavbarBrand>

                <Dropdown>
                    <Dropdown.Toggle
                        variant="secondary"
                        id="dropdown-basic"
                        className='border rounded-3 p-2 download-btn-hover'
                        style={{ backgroundColor: "#64748B" }}
                    >
                        Descargar CV
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item
                            className="border rounded-3 p-2 download-btn-hover"
                            href="/CV_Julian_Zulatto.pdf"
                            download="CV_Julian_Zulatto_Español.pdf"

                        >
                            CV en Español (PDF)
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item
                            className="border rounded-3 p-2 download-btn-hover"
                            href="/Julian_Zulatto_CV_Ingles.pdf"
                            download="CV_Julian_Zulatto_English.pdf"
                        >
                            CV en Ingles (PDF)
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <NavbarToggle aria-controls="basic-navbar-nav" />
                <NavbarCollapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink href="#Julian" style={{ color: "#F4F4F4" }}>
                            Julian
                        </NavLink>
                        <NavLink href="#about" style={{ color: "#F4F4F4" }}>
                            Sobre Mi
                        </NavLink>
                        <NavLink href="#education" style={{ color: "#F4F4F4" }}>
                            Educacion
                        </NavLink>
                        <NavLink href="#skills" style={{ color: "#F4F4F4" }}>
                            Habilidades
                        </NavLink>
                        <NavLink href="#projects" style={{ color: "#F4F4F4" }}>
                            Proyectos
                        </NavLink>
                        <NavLink href="#contact" style={{ color: "#F4F4F4" }}>
                            Contacto
                        </NavLink>
                    </Nav>
                </NavbarCollapse>
            </Container>
        </Navbar>
    );
}
