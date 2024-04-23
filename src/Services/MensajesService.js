import DataServices from "./DataServices";

const MensajesService = {
    setMensaje: async (mensaje) => {
        const dataservices = DataServices();
        return dataservices.setMensaje(mensaje);
    },
};
export default MensajesService;
