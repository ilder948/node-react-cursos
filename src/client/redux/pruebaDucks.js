import axios from 'axios';

// constantes
const dataInicial = {
    array : [],
    offset : 0
}

// types
const OBTENER_PRUEBAS_EXITO = 'OBTENER_PRUEBAS_EXITO';
const SIGUIENTE_PRUEBAS_EXITO = 'SIGUIENTE_PRUEBAS_EXITO';

// reducer
export default function pruebasReducer(state = dataInicial, accion){
    switch (accion.type) {
        case OBTENER_PRUEBAS_EXITO:
            return {...state, array: accion.payload}
        case SIGUIENTE_PRUEBAS_EXITO:
            return {...state, array: accion.payload.array, offset:accion.payload.offset}
        default:
            return state;
    }
}

// acciones
export const obtenerPruebasAccion = () => async (dispatch, getState) => {
    const offset = getState().pruebas.offset;
    try {
        const res = await axios.get(`http://localhost:3000/api/test?offset=${offset}&limit=10`);
        dispatch({
            type: OBTENER_PRUEBAS_EXITO,
            payload: res.data.data
        });
    } catch (error) {
        console.log(error)
    }
}

export const siguientePruebasAccion = (numero) => async (dispatch, getState) => {

    const offset = getState().pruebas.offset;
    const siguiente = offset + numero
    
    try {
        const res = await axios.get(`http://localhost:3000/api/test?offset=${siguiente}&limit=10`)
        dispatch({
            type: SIGUIENTE_PRUEBAS_EXITO,
            payload: {
                array: res.data.data,
                offset:siguiente
            }
        });
    } catch (error) {
        console.log(error)
    }
}