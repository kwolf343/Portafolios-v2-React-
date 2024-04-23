import axios from 'axios';
import { environment } from '../environment';

const DataServices = () => {
    const cargarPaginas = () => {
        return axios.get(environment.urlBackend)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                console.error('Error al cargar las páginas:', error);
                throw error;
            });
    }
    const getPagina = async (id) => {
        try {
            const response = await axios.get(environment.urlBackend);
            const paginas = response.data;
            const pagina = paginas[id];
            if (!pagina) {
                throw new Error(`No se encontró la página con el id ${id}`);
            }
            return pagina;
        } catch (error) {
            console.error('Error al cargar la página:', error);
            throw error;
        }
    };
    const setMensaje = async (mensaje) => {
        try {
            const response = await axios.post(`https://buzon-f5cfa-default-rtdb.firebaseio.com/mensajes.json`, mensaje );
            return response.data;
        } catch (error) {
            console.error('Error al enviar el mensaje:', error);
            throw error;
        }
    };

    return {
        cargarPaginas,
        getPagina,
        setMensaje
    };
}

export default DataServices;
