import React from 'react';
import image from "../resources/20231021_162320.jpg"

function Home() {
    return (
        <section id="about" className="container text-center mt-5">
            <h1>Hola, soy [Julian Zulatto]</h1>
            <p>Desarrollador Front-end React</p>
            <img src={image} alt="Tu foto" style={{ width: "200px", height: "300px" }} />
        </section>)
}

export default Home;