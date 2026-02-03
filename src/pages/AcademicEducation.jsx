import CardComponent from "../components/Cards/CardComponent"



function AcademicEducation() {

    return (
        <div>
            <h2 className="text-center" style={{ color: "#55e6a5" }}>Educacion Academica</h2>
            <CardComponent
                title="🎓 Analista Contable Universitario"
                width={"26rem"}
                text={
                    <>
                        <div style={{ color: "#aaa", fontSize: "0.95rem" }}>
                            Universidad Blas Pascal · 2018
                        </div>
                        <p>_______________________________</p>
                        <p style={{ marginTop: "0.75rem", lineHeight: "1.6" }}>
                            Formación orientada al análisis contable, procesos administrativos
                            y gestión financiera, aplicada al desarrollo de sistemas de gestión.
                        </p>
                    </>
                }
            />
        </div>
    )
}

export default AcademicEducation