import React, { useState } from "react";
import './Principal.css';

function Conocimiento() {
    return(
        <div className="row">
            <div className="col-md-3 col-sm-6 hover">
                    <h5 className="principal">Front-End</h5>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>Typescript</li>
                        <li>Angular</li>
                        <li>React</li>
                    </ul>
                </div>
                <div className="col-md-3 col-sm-6 hover">
                    <h5 className="principal">Back-End</h5>
                    <ul>
                        <li>Java</li>
                        <li>C#</li>
                        <li>SpringBoot</li>
                    </ul>
                </div>
                <div className="col-md-3 col-sm-6 hover">
                    <h5 className="principal">Bases de datos</h5>
                    <ul>
                        <li>Sql Server</li>
                        <li>MySql</li>
                        <li>Firebase</li>
                    </ul>
                </div>
                <div className="col-md-3 col-sm-6 hover">
                    <h5 className="principal">Herramientas</h5>
                    <ul>
                        <li>GitHub</li>
                        <li>Docker</li>
                        <li>Postman</li>
                    </ul>
                </div>
        </div>
    );
}
export default Conocimiento;