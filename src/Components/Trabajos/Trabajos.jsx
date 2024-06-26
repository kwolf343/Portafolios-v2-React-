import React, { useState, useEffect } from 'react';
import PaginasService from '../../Services/PaginasService';
import './Trabajos.css';
import CartillaTrabajo from './CartillaTrabajo/CartillaTrabajo';

const Trabajo = () => {
    const [paginas, setPaginas] = useState([]);
    const imagenes = ['csharp.png', 'java.png', 'angular.png', 'android.png', 'html.png', 'react.png', 'springBoot.png'];
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await PaginasService.obtenerPaginas();
                const misPaginas = Object.values(response);
                setPaginas(misPaginas);
                setLoading(false);
            } catch (error) {
                console.error('Error al obtener las páginas:', error);
                setPaginas([]);
            }
        };

        fetchData();
    }, []);

    const verTrabajo = (index) => {
        window.location.href = `/trabajo/${index}`;
    }

    return (
        <div className='contenedor-trabajos'>
            <p className="fuente color-principal">Mis trabajos</p>
            {loading ? (
                <div className='carga color-principal'>
                    <span className="loader color-principal"></span>
                    <p>Espera un momento</p>
                </div>
            ) : (
                <ul className="trabajos-list">
                    {
                        paginas.map((pagina, index) => (
                            <li key={index}>
                                <CartillaTrabajo
                                    imagen={imagenes[pagina.lenguaje - 1]}
                                    descripcion={pagina.titulo}
                                    titulo={pagina.titulo}
                                    descripcionCorta={pagina.descripcionCorta}
                                    index={index}
                                    verTrabajo={verTrabajo}
                                />
                            </li>
                        ))
                    }
                </ul>
            )}
        </div>
    );
}

export default Trabajo;
