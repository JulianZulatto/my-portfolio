import PortfolioNavBar from "../components/Navbars/PortfolioNavbar";
import About from "./About";
import Julian from "./Julian";
import Contact from "./Contact";
import DevelopmentTraining from "./DevelopmentTraining";
import Skils from "./Skils";
import Projects from "./Projects";
import Footer from "../components/Footer/Footer";
import AcademicEducation from "./AcademicEducation";

export default function Layout() {
    return (
        <div className="d-flex flex-column">
            <div>
                <PortfolioNavBar />
                <main className=" overflow-auto p-4">
                    <Julian />
                    <About />
                    <AcademicEducation />
                    <DevelopmentTraining />
                    <Skils />
                    <Projects />
                    <Contact />
                </main>
            </div>
            <Footer />
        </div>
    )
};