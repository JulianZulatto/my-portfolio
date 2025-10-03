import React from 'react';


function Contact() {
    return (
        <section className="container mt-5">
            <h2 className="mb-4">Contacto</h2>
            <ul className="list-unstyled">
                <li className="mb-3 d-flex align-items-center">
                    <i className="bi bi-envelope-fill me-2 fs-4 text-primary"></i>
                    <span className="me-2 fw-bold">Email:</span>
                    <a href="mailto:tuemail@example.com">julianzulatto14@outlook.com</a>
                </li>
                <li className="mb-3 d-flex align-items-center">
                    <i className="bi bi-linkedin me-2 fs-4 text-primary"></i>
                    <span className="me-2 fw-bold">LinkedIn:</span>
                    <a href="https://www.linkedin.com/in/tuusuario" target="_blank">https://www.linkedin.com/in/julian-zulatto-a20a45253/</a>
                </li>
                <li className="mb-3 d-flex align-items-center">
                    <i className="bi bi-github me-2 fs-4 text-dark"></i>
                    <span className="me-2 fw-bold">GitHub:</span>
                    <a href="https://github.com/tuusuario" target="_blank">https://github.com/JulianZulatto</a>
                </li>
                <li className="mb-3 d-flex align-items-center">
                    <i className="bi bi-whatsapp me-2 fs-4 text-success"></i>
                    <span className="me-2 fw-bold">WhatsApp:</span>
                    <a href="https://wa.me/549123456789" target="_blank">+54 9 3571 529817</a>
                </li>
            </ul>
        </section>
    )
}

export default Contact;