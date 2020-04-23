import axios from 'axios';

// constantes
const dataInicial = {
    array : [],
    offset : 0
}

// types
const OBTENER_RAMOS_EXITO = 'OBTENER_RAMOS_EXITO';
const SIGUIENTE_RAMOS_EXITO = 'SIGUIENTE_RAMOS_EXITO';

// reducer
export default function ramosReducer(state = dataInicial, accion){
    switch (accion.type) {
        case OBTENER_RAMOS_EXITO:
            return {...state, array: accion.payload}
        case SIGUIENTE_RAMOS_EXITO:
            return {...state, array: accion.payload.array, offset:accion.payload.offset}
        default:
            return state;
    }
}

// acciones
export const obtenerRamosAccion = () => async (dispatch, getState) => {
    const offset = getState().ramos.offset;
    try {
        const res = await axios.get(`http://localhost:3000/api/subject?offset=${offset}&limit=10`);
        dispatch({
            type: OBTENER_RAMOS_EXITO,
            payload: res.data.data
        });
    } catch (error) {
        console.log(error)
    }
}

export const siguienteRamosAccion = (numero) => async (dispatch, getState) => {

    const offset = getState().ramos.offset;
    const siguiente = offset + numero
    
    try {
        const res = await axios.get(`http://localhost:3000/api/subject?offset=${siguiente}&limit=10`)
        dispatch({
            type: SIGUIENTE_RAMOS_EXITO,
            payload: {
                array: res.data.data,
                offset:siguiente
            }
        });
    } catch (error) {
        console.log(error)
    }
}