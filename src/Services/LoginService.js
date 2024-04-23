import { useState } from 'react';
import { auth } from '../firebase/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const LoginService = () => {
    const [token, setToken] = useState('');
    const [cookies] = useState({
        get: (name) => localStorage.getItem(name),
        set: (name, value) => localStorage.setItem(name, value),
        remove: (name) => localStorage.removeItem(name)
    });
    
    const login = async (email, password) => {
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            const user = response.user;
            const token = await user.getIdToken();
            setToken(token);
            cookies.set("token", token);
            console.log('Token generado: '+token);
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
        }
    };

    const getToken = () => {
        return cookies.get("token");
    };

    const estaLogueado = () => {
        return !!cookies.get("token");
    };

    const logout = async () => {
        try {
            await auth.signOut();
            setToken('');
            cookies.remove("token");
            cookies.remove("mail");
            window.location.href = '';
        } catch (error) {
            console.error('Error al cerrar sesión:', error);
        }
    };

    return {
        login,
        logout,
        getToken,
        estaLogueado,
        logout
    };
};

export default LoginService;
