import React from 'react';

function Contact() {
    return
    <section id="contact" className="container mt-5">
        <h2 className="text-center">Contacto</h2>
        <form>
            <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input type="text" className="form-control" id="name" placeholder="Tu nombre" />
            </div>
            <div className="form-group">
                <label htmlFor="email">Correo electrónico</label>
                <input type="email" className="form-control" id="email" placeholder="Tu correo" />
            </div>
            <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea className="form-control" id="message" rows="3" placeholder="Escribe tu mensaje"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
    </section>
}

export default Contact;