import React, { useState } from 'react';
import MensajesService from '../../Services/MensajesService.js';
import ServicioAlertas from "../../Services/ServicioAlertas.js";
import './Contactame.css';
import msg from '../../Models/msg.js';

function Contactame() {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [mensaje, setMensaje] = useState('');

    const enviar = async (e) => {
        e.preventDefault();
        const fetchData = async () => {
            try {
                const message = new msg(nombre, email, mensaje);
                const response = await MensajesService.setMensaje(message);
                ServicioAlertas.mensaje({
                    cantBotones: 1,
                    titulo: 'Exito!',
                    mensaje: 'Mensaje enviado con exito!',
                    logo: 'bi-check-circle-fill',
                    colorLogo: 'rgb(71,155,34)',
                    colorBoton: 'rgb(48,133,214)',
                    colorBoton2: 'red'
                });
            } catch (error) {
                ServicioAlertas.mensaje({
                    cantBotones: 1,
                    titulo: 'Error!',
                    mensaje: 'Ocurrio un error al enviar mensaje!',
                    logo: 'bi-check-circle-fill',
                    colorLogo: 'rgb(239,81,58)',
                    colorBoton: 'rgb(48,133,214)',
                    colorBoton2: 'red'
                });
                console.error('Error al enviar mensaje:', error);
            }
        };
        fetchData();
    };
    return (
        <div className='formulario'>
            <form onSubmit={enviar} className='col-md-6 col-sm-12 col-12'>
                <h1>Contáctame</h1>
                <div className='cajas'>
                    <input
                        className='form-control'
                        type="text"
                        id="nombre"
                        value={nombre}
                        placeholder='Ingresa tu nombre'
                        onChange={(e) => setNombre(e.target.value)}
                        required
                    />
                </div>
                <div className='cajas'>
                    <input
                        className='form-control'
                        type="email"
                        id="email"
                        value={email}
                        placeholder='Ingresa tu correo'
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className='cajas caja-grande'>
                    <textarea
                        className='form-control'
                        id="mensaje"
                        value={mensaje}
                        placeholder='Ingresa tu mensaje'
                        onChange={(e) => setMensaje(e.target.value)}
                        required
                        style={{ height: '150px', resize: 'none' }}
                    />
                </div>
                <div className='container-btn'>
                    <button type="submit" className="btn custom-btn me-2">Enviar</button>
                </div>
            </form>
        </div>
    );
}
export default Contactame;