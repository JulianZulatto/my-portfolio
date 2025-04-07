import image from '../../resources/20231021_162320.jpg'
import "bootstrap/dist/css/bootstrap.min.css";

export default function PortfolioNavBar() {
    return (
        <aside className="text-white d-flex flex-column align-items-center p-4" style={{ width: "20%", height: "100vh", backgroundColor: "#9b9fb5" }}>
            <img
                src={image}
                alt="Tu Foto"
                className="rounded-circle mb-4"
                style={{ width: "120px", height: "120px", objectFit: "cover", imageRendering: "auto" }}
            />
            <nav className="nav flex-column">
                <a href="#Julian" className="nav-link text-light">Julian</a>
                <a href="#about" className="nav-link text-light">Sobre mí</a>
                <a href="#education" className="nav-link text-light">Educacion</a>
                <a href="#skils" className="nav-link text-light">Habilidades</a>
                <a href="#projects" className="nav-link text-light">Proyectos</a>
                <a href="#contact" className="nav-link text-light">Contacto</a>
            </nav>
        </aside>
    );
}