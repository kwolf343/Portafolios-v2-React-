import React, { useState, useEffect } from "react";
import PaginasService from '../../Services/PaginasService';
import { useParams } from 'react-router-dom';
import './Trabajo.css';

function Trabajo() {
    const [pagina, setPagina] = useState(null);
    const { parametro } = useParams();
    const imagenes = ['csharp.png', 'java.png', 'angular.png', 'android.png', 'html.png', 'react.png', 'springBoot.png'];
    const imgTec = ['html.png', 'css.png', 'javascript.png', 'typescript.png', 'sql.png', 'mysql.png', 'firebase.png', 'java.png', 'react.png', 'springBoot.png'];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const miPagina = await PaginasService.getPagina(parametro);
                setPagina(miPagina);
                console.log(miPagina);
            } catch (error) {
                console.error('Error al obtener la página:', error);
                setPagina(null);
            }
        };
        fetchData();
    }, [parametro]);

    const enlace = () => {
        window.location.href = pagina.url;
    }

    return (
        <div className="trabajo-container">
            {pagina && (
                <div>
                    <div className="contenedor-arriba">
                        <div className="contenedor-izquierda">
                            <a href="/trabajos"><i className="bi bi-arrow-left-square-fill"></i></a>
                            <h1 className="color-principal">{pagina.titulo}</h1>
                        </div>
                        <div className="contenedor-derecha">
                            <img src={require(`../../Imagenes/${imagenes[pagina.lenguaje - 1]}`)} />
                        </div>
                    </div>
                    <div className="contenedor-abajo">
                        <div className="contenedor-izquierda contenedor-descripcion">
                            <div className="contenedor-imagenes">
                                <div>
                                    <img src={pagina.urlImg1} />
                                </div>
                                <div>
                                    <img src={pagina.urlImg2} />
                                </div>
                                <div>
                                    <img src={pagina.urlImg3} />
                                </div>
                            </div>
                            <div className="block">
                                <div className="color-secundario" dangerouslySetInnerHTML={{ __html: pagina.descripcionLarga }} />
                                <div>
                                    <button onClick={enlace} className="btn custom-btn me-2 bajar">
                                        {pagina.tipo === 1 ? 'Ver' : 'Descargar'}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="contenedor-derecha">
                            <div>
                                <h3 className="color-secundario">Tecnologías</h3>
                                <ul>
                                    {pagina.tecnologias && pagina.tecnologias.map((imagen, index) => (
                                        <li key={index}><img src={require(`../../Imagenes/${imgTec[imagen - 1]}`)} /></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            
        </div>

    );
}
export default Trabajo;

