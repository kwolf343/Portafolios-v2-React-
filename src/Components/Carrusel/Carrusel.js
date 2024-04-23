import React, { useState } from "react";
import './Carrusel.css';
import ServicioAlertas from "../../Services/ServicioAlertas.js";

function Carrusel() {
    const [cantBtns, setBtns] = useState(1);
    const [icono, setIcono] = useState('bi-bell-fill');
    const [titulo, setTitulo] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [colorLogo, setColorLogo] = useState('#34CFD0');
    const [colorSi, setColorSi] = useState('#7066E0');
    const [colorNo, setColorNo] = useState('#900C3F');
    const [valor, setValor] = useState(0);
    const listaIconos = ['bi-exclamation', 'bi-exclamation-circle', 'bi-exclamation-circle-fill', 'bi-exclamation-diamond',
        'bi-exclamation-diamond-fill', 'bi-exclamation-octagon', 'bi-exclamation-octagon-fill', 'bi-exclamation-square',
        'bi-info-square-fill', 'bi-exclamation-triangle', 'bi-exclamation-triangle-fill', 'bi-question-lg', 'bi-question-circle',
        'bi-question-diamond', 'bi-question-diamond-fill', 'bi-question-circle-fill', 'bi-bell', 'bi-bell-fill', 'bi-check',
        'bi-check-all', 'bi-check-circle', 'bi-check-circle-fill', 'bi-check-lg', 'bi-check-square', 'bi-check-square-fill',];
    const Btn = (num) => {
        setBtns(num);
    };
    const setClaseIcono = (clase) => {
        setIcono(clase);
    }
    const handleChange = (event) => {
        setValor(parseInt(event.target.value));
    };
    const tituloChange = (event) => {
        setTitulo(event.target.value);
    };
    const mensajeChange = (event) => {
        setMensaje(event.target.value);
    };
    const cambioColor = (event, opcion) => {
        const color = event.target.value;
        switch (opcion) {
            case 1:
                setColorLogo(color);
                break;
            case 2:
                setColorSi(color);
                break;
            case 3:
                setColorNo(color);
                break;
            default:
                break;
        }
    };
    const Lanzar = () => {
        ServicioAlertas.mensaje({
            cantBotones: cantBtns,
            titulo: titulo,
            mensaje: mensaje,
            logo: icono,
            colorLogo: colorLogo,
            colorBoton: colorSi,
            colorBoton2: colorNo
        });
    }
    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="contenidoSlider">
                        <div className="container-central">
                            <h2>Diseño responsive</h2>
                            <div className="container-inferior">
                                <img id="pc" src={require('../../Imagenes/laptop.png')} />
                                <img id="laptop" src={require('../../Imagenes/tablet.png')} />
                                <img id="celular" src={require('../../Imagenes/celular.png')} />
                            </div>
                        </div>
                    </div>
                    <img src={require('../../Imagenes/dos.png')} className="d-block w-100" alt="..." /></div>
                <div className="carousel-item">
                    <div className="contenidoSlider">
                        <div className="container-central">
                            <h2>Alertas</h2>
                            <div className="container-inferior panel d-flex">
                                <div className="botones d-flex">
                                    <div className="ok-sino">
                                        <div className="tipo d-flex">
                                            <span>TIPO</span><br />
                                        </div>
                                        <div className="btn-Opc" onClick={() => Btn(1)}>
                                            <img src={require('../../Imagenes/boton.png')} className="imagen" />
                                            <span className="cont">OK</span>
                                        </div>
                                        <div className="btn-Opc" onClick={() => Btn(2)}>
                                            <img src={require('../../Imagenes/boton.png')} className="imagen" />
                                            <span className="cont">SI/NO</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="pantalla">
                                    <div className="pantallaTop">
                                        <div onClick={() => Lanzar()}>
                                            <img src={require('../../Imagenes/boton.png')} />
                                            <span>Lanzar</span>
                                        </div>
                                    </div>
                                    <div className="pantallaBotom">
                                        <ul className="iconos" style={{ left: -valor + '%' }}>
                                            {listaIconos.map((clase, index) => (
                                                <li key={index}>
                                                    <i className={'bi ' + clase} style={{ color: colorLogo }} onClick={() => setClaseIcono(clase)}></i>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <input type="range" id="slider" name="slider" min="0" max="100" value={valor} onChange={handleChange} />
                                </div><div className="contenido-derecha d-flex">
                                    <div className="entradas">
                                        <label>Alerta</label>
                                        <input id="titulo" type="text" placeholder="Titulo" value={titulo} onChange={tituloChange} />
                                        <input id="mensaje" type="text" placeholder="Mensaje" value={mensaje} onChange={mensajeChange} />
                                    </div>
                                    <div className="personalizar">
                                        <label>Personalizar</label>
                                        <input id="logo" type="color" onChange={(event) => cambioColor(event, 1)} value={colorLogo} />
                                        <input id="si" type="color" onChange={(event) => cambioColor(event, 2)} value={colorSi} />
                                        <input id="no" type="color" onChange={(event) => cambioColor(event, 3)} value={colorNo} style={{ display: cantBtns === 1 ? 'none' : null }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src={require('../../Imagenes/tres.png')} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <div className="contenidoSlider">
                        <div className="container-central">
                            <h2>Curriculum Online</h2>
                            <div className="col-md-12 d-flex container-inferior">
                                <div className="boton col-md-6 col-sm-12">
                                    <button className="boton-curriculum">Ver curriculum <i
                                        className="bi bi-chevron-right"></i></button>
                                </div>
                                <div className="btns-curriculum col-md-6 col-sm-12">
                                    <div className="col-md-4 col-sm-2"><img src={require('../../Imagenes/Academico.png')} /></div>
                                    <div className="col-md-4 col-sm-2"><img src={require('../../Imagenes/Habilidades.png')} /></div>
                                    <div className="col-md-4 col-sm-2"><img src={require('../../Imagenes/Referencias.png')} /></div>
                                    <div className="col-md-4 col-sm-2"><img src={require('../../Imagenes/Tecnologias.png')} /></div>
                                    <div className="col-md-4 col-sm-2"><img src={require('../../Imagenes/Recursos.png')} /></div>
                                    <div className="col-md-4 col-sm-2"><img src={require('../../Imagenes/Portafolios.png')} /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src={require('../../Imagenes/uno.png')} className="d-block w-100 imagenSlider" />
                </div>
            </div>
            <button className="carousel-control-prev" id="flecha" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" id="flecha" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}
export default Carrusel;