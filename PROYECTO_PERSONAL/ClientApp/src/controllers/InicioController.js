import axios from 'axios';
const API_CONTROLLER = "/api/inicio/";

const agregarSolicitud = async (solicitud) => {
    return await axios.post(API_CONTROLLER + "agregarSolicitud", solicitud)
}


const obtenerProyectos = async () => {
    return await axios.get(API_CONTROLLER + "listarProyectos");
}

export {
    agregarSolicitud,
    obtenerProyectos
}   