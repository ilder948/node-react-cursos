import axios from 'axios';

// constantes
const dataInicial = {
    array : [],
    offset : 0
}

// types
const OBTENER_PROFESORES_EXITO = 'OBTENER_PROFESORES_EXITO';
const SIGUIENTE_PROFESORES_EXITO = 'SIGUIENTE_PROFESORES_EXITO';

// reducer
export default function profesorReducer(state = dataInicial, accion){
    switch (accion.type) {
        case OBTENER_PROFESORES_EXITO:
            return {...state, array: accion.payload}
        case SIGUIENTE_PROFESORES_EXITO:
            return {...state, array: accion.payload.array, offset:accion.payload.offset}
        default:
            return state;
    }
}

// acciones
export const obtenerProfesoresAccion = () => async (dispatch, getState) => {
    const offset = getState().profesores.offset;
    try {
        const res = await axios.get(`http://localhost:3000/api/teacher?offset=${offset}&limit=10`);
        dispatch({
            type: OBTENER_PROFESORES_EXITO,
            payload: res.data.data
        });
    } catch (error) {
        console.log(error)
    }
}

export const siguienteProfesoresAccion = (numero) => async (dispatch, getState) => {

    const offset = getState().profesores.offset;
    const siguiente = offset + numero
    
    try {
        const res = await axios.get(`http://localhost:3000/api/teacher?offset=${siguiente}&limit=10`)
        dispatch({
            type: SIGUIENTE_PROFESORES_EXITO,
            payload: {
                array: res.data.data,
                offset:siguiente
            }
        });
    } catch (error) {
        console.log(error)
    }
}