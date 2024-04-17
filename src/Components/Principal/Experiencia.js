import React, { useState } from "react";
import './Principal.css';

function Experiencia(props) {
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    const listaStyle = {
        maxHeight: expanded ? `${props.funciones.length * 60}px` : '0px',
        overflow: 'hidden',
        transition: 'max-height 0.5s ease'
    };

    return (
        <div className="container-experiencia col-md-6 col-sm-12 hover" id="pad">
            <h3 className="principal">{props.empresa}</h3>
            <p className="secundario"><strong>{props.puesto}</strong>{props.fecha}</p>
            <ul className="secundario lista-funciones" style={listaStyle}>
                {props.funciones.map((elemento, index) => (
                    <li key={index}>
                        {elemento}
                    </li>
                ))}
            </ul>
            <button className="btn custom-btn me-2" type="button" onClick={toggleExpanded}>
                {expanded ? 'Leer menos' : 'Leer más'}
            </button>
        </div>
    );
}

export default Experiencia;
