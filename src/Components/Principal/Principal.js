import React, { useState } from "react";
import './Principal.css';
import Experiencia from "./Experiencia";
import Conocimiento from "./Conocimiento";

function Principal() {

    const cursos = ["Javascript", "Angular", "SpringBoot", "React", "Docker"];
    const descripciones = ["Curso enfocado en una sólida base en la programación en JavaScript con un enfoque específico en su implementación en el desarrollo de páginas web. Durante el curso, se exploraron los conceptos fundamentales de JavaScript, incluyendo variables, estructuras de control y funciones, así como técnicas avanzadas para manipular el DOM y manejar eventos.",
        "Curso de angular sobre desarrollo de aplicaciones web utilizando el framework Angular en el que se exploraron los fundamentos de Angular, incluyendo la creación de componentes, la gestión del enrutamiento y el uso de servicios para el manejo de datos, técnicas avanzadas para integrar APIs externas, implementación de autenticación de usuarios y optimización en el rendimiento de las aplicaciones Angular.",
        "Curso sobre el framework Spring Boot, creación de API RESTful, la gestión de dependencias con Spring Dependency Injection y el uso de bases de datos relacionales con MySql y Spring Data JPA, Postman y JSON con ejercicios aplicados al mundo real y adición a proyectos con Angular",
        "Desarrollo de aplicaciones web utilizando la biblioteca de JavaScript React, conceptos fundamentales de React, incluyendo componentes, props, estado, hooks y el ciclo de vida del componente.",
        "Curso centrado en el mundo de la tecnología de contenedores a travez de la plataforma Docker para adquirir una comprensión sólida de los conceptos fundamentales de Docker, incluyendo la creación de contenedores, la gestión de imágenes y la configuración de redes además de temas avanzados como la orquestación de contenedores con Docker Compose"];
    const [curso, setCurso] = useState(cursos[0]);
    const [descripcion, setDescripcion] = useState(descripciones[0]);
    const seleccionarCurso = (num) => {
        setCurso(cursos[num]);
        setDescripcion(descripciones[num]);
    };
    const redireccionar = () => {
        window.open('https://ieeexplore.ieee.org/document/9959164', '_blank');
       
    };
    return (
        <div>
            <div className="container">
                <div className="saludo-container row hover" id="separar">
                    <div className="info-container col-md-9 col-sm-12">
                        <p className="enfasis">Hola! yo soy</p>
                        <h1 className="fuente principal">Kevin Antonio Magaña Monroy</h1>
                        <p className="fuente secundario">Desarrollador java y web</p>
                        <p className="contenido-perfil">
                            Soy un apasionado desarrollador web con amplios conocimientos y experiencia en desarrollo web manejando HTML, CSS, Javascript,
                            typescript trabajando con SPA con frameworks y librerias javascript como angular y react, además de eso manejo los lenguajes de
                            programación Java y C# (centrado principalmente en Java) entorno, SpringBoot y Primefaces con bases de datos SQL Server y MySql.
                            <br />
                            Como agregado, puedo trabajar con GitHub y Docker
                        </p>
                    </div>
                    <div className="img-container col-md-3 col-sm-12">
                        <img src={require('../../Imagenes/perfil.png')} />
                    </div>
                </div>
                <div className="row" id="separar">
                    <p className="enfasis">¿Experiencia laboral?</p>
                    <Experiencia
                        empresa='SAVIA GROUP'
                        puesto='ANGULAR FRONT-END DEVELOPER'
                        fecha=' Enero 2021 – Noviembre 2022'
                        funciones={['Desarrollo de components y servicios utilizando typescript',
                            'Consumo de microservicios',
                            'Contribución con estilos css para las webs',
                            'Trabajo remoto con GitHub']}
                    />
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
                <div id="separar" className="habilidades">
                    <p className="enfasis">Conocimiento y habilidades</p>
                    <Conocimiento />
                </div>
            </div>
            <div id="separar" className="center">
                <div className="curso">
                    <p className="enfasis">Mis cursos</p>
                    <p className="fuente secundario">Curso de {curso}</p>
                    <p className="secundario container">{descripcion}</p>
                    {cursos.map((item, index) => (
                        <button key={index} className="btn custom-btn me-2" type="button" onClick={() => seleccionarCurso(index)}>{item}</button>
                    ))}
                </div>
                <div id="separar" className="desarrollo container">
                    <p className="enfasis">Desarrollo profesional</p>
                    <div className="row container">
                        <div className="col-md-9 col-sm-12">
                            <h4 className="principal">Motor de base de datos con CLI</h4>
                            <p className="secundario">
                                Este proyecto trató del desarrollo de un motor de base de datos con lenguaje SQL en español que permite realizar las principales operaciones de un gestor de bases de datos, como la creación de bases de datos, usuarios y tablas, así como su eliminación, edición e inspección de las tablas y su información. El estudio se centró en el desarrollo de aplicaciones CLI compatibles con minix (linux) y windows, programadas en lenguaje C++.
                            </p>
                            <button className="btn custom-btn me-2" type="button" onClick={redireccionar}>Ir a proyecto en IEEE</button>
                        </div>
                        <img className="col-md-3 col-sm-12" src={require('../../Imagenes/conferencia.jpeg')} />
                    </div>
                    <br/><br/>
                    <div className="row container">
                        <div className="col-md-9 col-sm-12">
                            <h4 className="principal">Desarrollo de sistema SAMI</h4>
                            <p className="secundario">
                                Desarrollé un software para manejo de control de inventario llamado SAMI (SEMI AUTOMATICO MANEJADOR DE INVENTARIO) en lenguaje .NET con MySql y Windows Forms que posteriormente vendería y actualmente está en funcionamiento en despensa asunción en Izalco
                            </p>
                            <button className="btn custom-btn me-2" type="button">Ver en mis proyectos</button>
                        </div>
                        <img className="col-md-3 col-sm-12" src='https://firebasestorage.googleapis.com/v0/b/portafolios-40fdb.appspot.com/o/sami2.png?alt=media&token=1b79a393-82fa-4244-8f3a-97c92d9d7c03' />
                    </div>
                </div>
 
            </div>

        </div>

    );
}
export default Principal;