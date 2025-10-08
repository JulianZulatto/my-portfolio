import CardComponent from "../components/Cards/CardComponent";
import ToDoImage from "../resources/to-do-list-react.png"


function Projects() {

    const ToDoUrl = "https://to-do-list-react-xi-azure.vercel.app/"

    const handleClick = () => {
        window.open(ToDoUrl, "_blank")
    }

    return (
        <section id="projects" className="container mt-5">
            <h2 className="text-center" style={{color:"#22D3EE"}}>Proyectos</h2>
        <CardComponent
        img={ToDoImage}
        title={"To Do List"}
        text={"To Do List con React"}
        onButtonClick={handleClick} 
        name={"Ver Proyecto"}     
        />
        </section>
    )
}
export default Projects;