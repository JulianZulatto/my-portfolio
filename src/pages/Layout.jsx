import PortfolioNavBar from "../components/Navbars/PortfolioNavbar";
import About from "./About";
import Julian from "./Julian";
import Contact from "./Contact";
import Education from "./Education";
import Skils from "./Skils";
import Projects from "./Projects";
import Footer from "../components/Footer/Footer";

export default function Layout() {
    return (
        <div className="d-flex flex-column">
            <div>
                <PortfolioNavBar />
                <main className=" overflow-auto p-4" style={{ backgroundColor: "#0F172A" }}>
                    <Julian />
                    <About />
                    <Education />
                    <Skils />
                    <Projects />
                    <Contact />
                </main>
            </div>
            <Footer />
        </div>
    )
};