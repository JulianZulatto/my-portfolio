import { Container, Nav, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle, NavLink } from 'react-bootstrap';
import image from '../../resources/20231021_162320.jpg'
import "bootstrap/dist/css/bootstrap.min.css";

export default function PortfolioNavBar() {
    return (
        <Navbar expand="lg" className="sticky-top" style={{ backgroundColor: "#64748B" }} variant='dark'>
            <Container className='align-items-center'>
                <NavbarBrand href='#Julian'>
                    <img
                        src={image}
                        alt="Tu Foto"
                        className="rounded-circle me-2"
                        style={{ width: "80px", height: "80px", objectFit: "cover", imageRendering: "auto" }}
                    />
                </NavbarBrand>
                <NavbarToggle aria-controls='basic-navbar-nav' />
                <NavbarCollapse id='basic-navbar-nav'>
                    <Nav className="ms-auto">
                        <NavLink href='#Julian' style={{ color: "#F4F4F4" }}>Julian</NavLink>
                        <NavLink href='#about' style={{ color: "#F4F4F4" }}>Sobre Mi</NavLink>
                        <NavLink href='#education' style={{ color: "#F4F4F4" }}>Educacion</NavLink>
                        <NavLink href='#skills' style={{ color: "#F4F4F4" }}>Habilidades</NavLink>
                        <NavLink href='#projects' style={{ color: "#F4F4F4" }}>Proyectos</NavLink>
                        <NavLink href='#contact' style={{ color: "#F4F4F4" }}>Contacto</NavLink>
                    </Nav>
                </NavbarCollapse>
            </Container>
        </Navbar>
    );
}