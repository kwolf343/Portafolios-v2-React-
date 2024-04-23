import React from "react";
import './Conocimiento.css';

function Conocimiento(props) {
    return (
        <>
            <h5 className="color-principal">{props.titulo}</h5>
            <ul className="lista-conocimiento">
                {props.lista.map((tecnologia, index) => (
                    <li key={index}>{tecnologia}</li>
                ))}
            </ul>
        </>
    );
}
export default Conocimiento;