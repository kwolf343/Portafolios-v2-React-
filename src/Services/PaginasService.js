import DataServices from "./DataServices";

const PaginasService = {
    obtenerPaginas: async () => {
        const dataservices = DataServices();
        return dataservices.cargarPaginas();
    },
    getPagina: async (id) => {
        const dataservices = DataServices();
        return dataservices.getPagina(id);
    }
};
export default PaginasService;
