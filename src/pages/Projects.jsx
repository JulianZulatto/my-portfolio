

function Projects() {
    return (
        <section id="projects" className="container mt-5">
            <h2 className="text-center" style={{color:"#22D3EE"}}>Mis Proyectos</h2>
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <img src="proyecto1.jpg" className="card-img-top" alt="Proyecto 1" />
                        <div className="card-body">
                            <h5 className="card-title">Genna Lenceria</h5>
                            <p className="card-text">Ecommerce funcional, dinamico e interactivo utilizando react, bootstrap y javascript.</p>
                            <a href="https://github.com/tuusuario/proyecto1" className="btn btn-primary">Ver Proyecto</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Projects;