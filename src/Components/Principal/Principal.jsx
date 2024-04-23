import React, { useState } from "react";
import './Principal.css';
import Experiencia from "./Experiencia/Experiencia";
import Conocimiento from "./Conocimiento/Conocimiento";
import Perfil from "./Perfil/Perfil";
import Desarrollo from "./Desarrollo/Desarrollo";
import { cursos, descripciones } from "./Datos"

function Principal() {

    const [curso, setCurso] = useState(cursos[0]);
    const [descripcion, setDescripcion] = useState(descripciones[0]);
    const seleccionarCurso = (num) => {
        setCurso(cursos[num]);
        setDescripcion(descripciones[num]);
    };
    const redireccionar = () => {
        window.open('https://ieeexplore.ieee.org/document/9959164', '_blank');
    };
    const sami = () => {
        window.location.href = "/trabajo/3";
    }
    return (
        <div>
            <div className="container separar">
                <div className="row">
                    <p className="enfasis">Hola! yo soy</p>
                    <Perfil />
                </div>
                <div className="row separar">
                    <p className="enfasis">¿Experiencia laboral?</p>
                    <div className="col-md-6 col-sm-12">
                        <Experiencia
                            empresa='SAVIA GROUP'
                            puesto='ANGULAR FRONT-END DEVELOPER'
                            fecha=' Enero 2021 – Noviembre 2022'
                            funciones={['Desarrollo de components y servicios utilizando typescript',
                                'Consumo de microservicios',
                                'Contribución con estilos css para las webs',
                                'Trabajo remoto con GitHub']}
                        />
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <Experiencia
                            empresa='OLS DATA'
                            puesto='OPERADOR DE SISTEMAS Y PROGRAMADOR'
                            fecha=' Junio 2022 – Febrero 2024'
                            funciones={['Soporte a clientes de la empresa (Credomatic y BAC) resolución de problemas referentes a los módulos de los documentos digitales ',
                                'Encargado de proceso de generación y envío de estados de cuenta, revisión de logs tomcats y manejo de herramienta en línea socketlabs ',
                                'Administrador de bases de datos existentes en SQL Server con registros de Credomatic y BAC ',
                                'Programador java consumiendo api proporcionadas por Credomatic y BAC y resolución de bugs en códigos ']}
                        />
                    </div>
                </div>
                <div className="habilidades separar">
                    <p className="enfasis">Conocimiento y habilidades</p>
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <Conocimiento
                                titulo='Front-End'
                                lista={['HTML', 'CSS', 'Javascript', 'Typescript', 'React', 'Angular']}
                            />
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <Conocimiento
                                titulo='Back-End'
                                lista={['Java', 'C#', 'SpringBoot']}
                            />
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <Conocimiento
                                titulo='Bases de datos'
                                lista={['Sql Server', 'MySql', 'Firebase']}
                            />
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <Conocimiento
                                titulo='Herramientas'
                                lista={['GitHub', 'Docker', 'Postman']}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="center separar">
                <div className="curso">
                    <p className="enfasis">Mis cursos</p>
                    <p className="fuente color-secundario">Curso de {curso}</p>
                    <p className="color-secundario container">{descripcion}</p>
                    {cursos.map((item, index) => (
                        <button key={index} className="btn custom-btn me-2" type="button" onClick={() => seleccionarCurso(index)}>{item}</button>
                    ))}
                </div>
                <div id="separar" className="desarrollo container">
                    <p className="enfasis">Desarrollo profesional</p>
                    <div className="container">
                        <Desarrollo
                            titulo='Motor de base de datos con CLI'
                            descripcion='Este proyecto trató del desarrollo de un motor de base de datos con lenguaje SQL en español que permite realizar las principales operaciones de un gestor de bases de datos, como la creación de bases de datos, usuarios y tablas, así como su eliminación, edición e inspección de las tablas y su información. El estudio se centró en el desarrollo de aplicaciones CLI compatibles con minix (linux) y windows, programadas en lenguaje C++.'
                            nameBtn='Ir a proyecto en IEEE'
                            imagen='conferencia.jpeg'
                            redireccionar={redireccionar}
                        />
                    </div>
                    <br /><br />
                    <div className="container">
                        <Desarrollo
                            titulo='Desarrollo de sistema SAMI'
                            descripcion='Desarrollé un software para manejo de control de inventario llamado SAMI (SEMI AUTOMATICO MANEJADOR DE INVENTARIO) en lenguaje .NET con MySql y Windows Forms que posteriormente vendería y actualmente está en funcionamiento en despensa asunción en Izalco'
                            nameBtn='Ver en mis proyectos'
                            imagen='https://firebasestorage.googleapis.com/v0/b/portafolios-40fdb.appspot.com/o/sami2.png?alt=media&token=1b79a393-82fa-4244-8f3a-97c92d9d7c03'
                            redireccionar={sami}
                        />
                    </div>
                </div>
            </div>
        </div>

    );
}
export default Principal;