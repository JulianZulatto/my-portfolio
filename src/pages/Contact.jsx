import React from 'react';


function Contact() {
    return (
        <section id='contact' className="container mt-5">
            <h2 className="mb-4" style={{ color: "#22D3EE" }}>Contacto</h2>
            <ul className="list-unstyled">
                <li className="mb-3 d-flex align-items-center">
                    <i className="bi bi-envelope-fill me-2 fs-4 text-primary"></i>
                    <span className="me-2 fw-bold" style={{ color: "#22D3EE" }}>Email:</span>
                    <a href="mailto:julianzulatto14@outlook.com">julianzulatto14@outlook.com</a>
                </li>
                <li className="mb-3 d-flex align-items-center">
                    <i className="bi bi-linkedin me-2 fs-4 text-primary"></i>
                    <span className="me-2 fw-bold" style={{ color: "#22D3EE" }}>LinkedIn:</span>
                    <a href="https://www.linkedin.com/in/julian-zulatto-a20a45253/" target="_blank">https://www.linkedin.com/in/julianzulatto</a>
                </li>
                <li className="mb-3 d-flex align-items-center">
                    <i className="bi bi-github me-2 fs-4 text-dark"></i>
                    <span className="me-2 fw-bold" style={{ color: "#22D3EE" }}>GitHub:</span>
                    <a href="https://github.com/JulianZulatto" target="_blank">https://github.com/JulianZulatto</a>
                </li>
                <li className="mb-3 d-flex align-items-center">
                    <i className="bi bi-whatsapp me-2 fs-4 text-success"></i>
                    <span className="me-2 fw-bold" style={{ color: "#22D3EE" }}>WhatsApp:</span>
                    <a href="https://wa.me/5493571529817" target="_blank">+54 9 3571 529817</a>
                </li>
            </ul>
        </section>
    )
}

export default Contact;