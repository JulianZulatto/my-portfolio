import {
    Container,
    Nav,
    Navbar,
    NavbarCollapse,
    NavbarToggle,
    NavLink,
    Image
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DownloadHover.css";
import LogoJulian from "../../resources/Logo-julian.png";

export default function PortfolioNavBar() {
    return (
        <Navbar
            expand="lg"
            className="sticky-top"
            style={{ backgroundColor: "#23272e" }}
            variant="dark"
        >
            <Container className="d-flex align-items-center">

                <Image
                    src={LogoJulian}
                    style={{ height: "50px" }}
                    className="me-2"
                />

                <NavLink href="#Julian" className="brand-name">
                    Julian
                </NavLink>

                <NavbarToggle aria-controls="basic-navbar-nav" />
                <NavbarCollapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink href="#about" className="brand-name">
                            Sobre Mi
                        </NavLink>
                        <NavLink href="#education" className="brand-name">
                            Educacion
                        </NavLink>
                        <NavLink href="#skills" className="brand-name">
                            Habilidades
                        </NavLink>
                        <NavLink href="#projects" className="brand-name">
                            Proyectos
                        </NavLink>
                        <NavLink href="#contact" className="brand-name">
                            Contacto
                        </NavLink>
                    </Nav>
                </NavbarCollapse>
            </Container>
        </Navbar>
    );
}
