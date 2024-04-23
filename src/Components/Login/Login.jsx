import React, { useState } from 'react';
import LoginService from '../../Services/LoginService';
import './Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const loginService = LoginService();

    const login = async (e) => {
        e.preventDefault();
        loginService.login(email, password);
    };

    return (
        <div className='formulario'>
            <form onSubmit={login} className='col-md-6 col-sm-12 col-12'>
            <h1>Login</h1>
                <div className='inputs'>
                    <input
                        className='form-control'
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className='inputs'>
                    <input
                        className='form-control'
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className='container-btn'>
                    <button type="submit" className="btn custom-btn me-2">Enviar</button>
                </div>
            </form>
        </div>
    );
}
export default Login;