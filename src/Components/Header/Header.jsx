import React,{ useState } from "react";
import './Header.css';

function Header() {
    const [status, setStatus] = useState(false);

    const Click = () => {
        setStatus(!status);
    };
    return (
        <nav className={"navbar navbar-expand-lg navbar-dark " + (status ? 'pintar' : '')}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#"></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={Click}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://drive.usercontent.google.com/u/0/uc?id=1Dgst0fXjdW97WfrDEo34M0tfGTciJt_a&export=download">Curriculum</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/trabajos">Mis trabajos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contactame">Contactame</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default Header;