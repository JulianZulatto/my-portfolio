import image from '../../resources/20231021_162320.jpg'
import "bootstrap/dist/css/bootstrap.min.css";

export default function PortfolioNavBar() {
    return (
        <aside className="d-flex flex-column align-items-center p-4" style={{ width: "20%", height: "100vh", backgroundColor: "#64748B" }}>
            <img
                src={image}
                alt="Tu Foto"
                className="rounded-circle mb-4"
                style={{ width: "120px", height: "120px", objectFit: "cover", imageRendering: "auto" }}
            />
            <nav className="nav flex-column">
                <a href="#Julian" className="nav-link" style={{color:"#F4F4F4"}}>Julian</a>
                <a href="#about" className="nav-link" style={{color:"#F4F4F4"}}>Sobre mí</a>
                <a href="#education" className="nav-link" style={{color:"#F4F4F4"}}>Educacion</a>
                <a href="#skils" className="nav-link" style={{color:"#F4F4F4"}}>Habilidades</a>
                <a href="#projects" className="nav-link" style={{color:"#F4F4F4"}}>Proyectos</a>
                <a href="#contact" className="nav-link" style={{color:"#F4F4F4"}}>Contacto</a>
            </nav>
        </aside>
    );
}