import {Button, Card} from 'react-bootstrap'

function Experience (){

    const fluxErpUrl = "https://fluxerp.com.ar/login"

    const handleVisitFluxErp=()=>{
        window.open(fluxErpUrl, "_blank")
    }

    return(
        <section className="d-flex align-items-center flex-column m-4">
            <Card className="d-flex align-items-center  p-4" style={{background: "#1f2329", color: "#ffffff", maxWidth: "900px"}}>
        <h2 className="text-center" style={{ color: "#55e6a5" }}>Experiencia</h2>
            <h3>FluxERP</h3>
            <p>FluxERP es un sistema de gestión orientado a procesos administrativos, comerciales y operativos.</p>
                <p>Actualmente colaboro en el frontend de FluxERP junto a Facundo Crusta, en Crusoft, participando en mejoras y ajustes sobre una base de código real ya existente.</p>
                <p>En este trabajo me toca analizar componentes y funcionalidades preexistentes, entender cómo está estructurada la aplicación y proponer cambios de forma cuidadosa,
                    buscando mejorar la experiencia de uso sin afectar lo que ya funciona. Trabajo principalmente con React, JavaScript y CoreUI,
                    y sigo una metodología de cambios seguros: investigo, analizo, planifico la integración, implemento en ramas separadas y luego preparo el Pull Request para revisión.
                </p>
                <p>También preparé mi entorno local para poder levantar el proyecto, hacer pruebas y validar cambios con mayor seguridad, trabajando con herramientas como Docker, Java, Maven y una terminal Linux/Ubuntu.</p>
            <div>
            <strong>Mi aporte en esta experiencia</strong>
            <ul>
                <li>Analizar código preexistente antes de modificarlo</li>
                <li>Investigar la estructura general de la aplicación y sus componentes</li>
                <li>Aplicar correcciones y mejoras de UI/UX</li>
                <li>Trabajar con Git y GitHub usando ramas seguras y Pull Requests</li>
                <li>Priorizar intervenciones cuidadosas para no romper funcionalidades existentes</li>
            </ul>
            </div>
                <p>Esta experiencia me está ayudando a crecer mucho como desarrollador frontend, sobre todo en algo que valoro mucho: aprender a trabajar sobre código real, entender antes de tocar y mejorar de forma segura. Hoy sigo fortaleciendo mi capacidad de implementación y mi autonomía, pero ya con una base práctica de trabajo en equipo, revisión de cambios y foco en calidad.</p>
                <Button
                    onClick={handleVisitFluxErp}
                    className="border-0"
                    style={{
                        backgroundColor: "#55e6a5",
                        color: "#000000",
                        fontWeight: 600
                    }}>
                    Visitar sitio
                </Button>
                <p
                    className="text-center mt-2 mb-0"
                    style={{ fontSize: "0.95rem", color: "#cfcfcf", maxWidth: "700px" }}>
                    El sistema puede visitarse, pero la creación de cuentas y el acceso completo
                    requieren un código de verificación por cuestiones de licencia y validación.
                </p>
            </Card>
        </section>
    )
}

export default Experience