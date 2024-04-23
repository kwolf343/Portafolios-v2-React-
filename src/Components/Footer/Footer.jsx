import React from "react";
import './Footer.css';

function Footer() {
    return (
        <footer className="container">
            <a href="mailto:kammonroy@gmail.com" target="_blank" id="icono"><i className="bi bi-envelope" ></i></a>
            <a href="https://www.facebook.com/kevin.anmm" target="_blank"><i className="bi bi-facebook"></i></a>
            <a href="https://wa.me/+50379440351" target="_blank"><i className="bi bi-whatsapp"></i></a>
            <a href="https://www.linkedin.com/in/kevin-monroy/" target="_blank"><i className="bi bi-linkedin"></i></a>
            <a href="https://github.com/kwolf343" target="_blank"><i className="bi bi-github"></i></a>
            <p>(2021-2024) Kevin Antonio Magaña Monroy (Programador)</p>
        </footer>
    );
}
export default Footer;