import axios from 'axios';

// constantes
const dataInicial = {
    array : [],
    offset : 0
}

// types
const OBTENER_CURSOS_EXITO = 'OBTENER_CURSOS_EXITO';
const SIGUIENTE_CURSOS_EXITO = 'SIGUIENTE_CURSOS_EXITO';

// reducer
export default function cursoReducer(state = dataInicial, accion){
    switch (accion.type) {
        case OBTENER_CURSOS_EXITO:
            return {...state, array: accion.payload}
        case SIGUIENTE_CURSOS_EXITO:
            return {...state, array: accion.payload.array, offset:accion.payload.offset}
        default:
            return state;
    }
}

// acciones
export const obtenerCursosAccion = () => async (dispatch, getState) => {
    const offset = getState().cursos.offset;
    try {
        const res = await axios.get(`http://localhost:3000/api/course?offset=${offset}&limit=10`);
        dispatch({
            type: OBTENER_CURSOS_EXITO,
            payload: res.data.data
        });
    } catch (error) {
        console.log(error)
    }
}

export const siguienteCursosAccion = (numero) => async (dispatch, getState) => {

    const offset = getState().cursos.offset;
    const siguiente = offset + numero
    
    try {
        const res = await axios.get(`http://localhost:3000/api/course?offset=${siguiente}&limit=10`)
        dispatch({
            type: SIGUIENTE_CURSOS_EXITO,
            payload: {
                array: res.data.data,
                offset:siguiente
            }
        });
    } catch (error) {
        console.log(error)
    }
}