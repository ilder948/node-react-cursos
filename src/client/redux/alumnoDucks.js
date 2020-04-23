import axios from 'axios';

// constantes
const dataInicial = {
    array : [],
    offset : 0
}

// types
const OBTENER_ALUMNOS_EXITO = 'OBTENER_ALUMNOS_EXITO';
const SIGUIENTE_ALUMNOS_EXITO = 'SIGUIENTE_ALUMNOS_EXITO';

// reducer
export default function alumnoReducer(state = dataInicial, accion){
    switch (accion.type) {
        case OBTENER_ALUMNOS_EXITO:
            return {...state, array: accion.payload}
        case SIGUIENTE_ALUMNOS_EXITO:
            return {...state, array: accion.payload.array, offset:accion.payload.offset}
        default:
            return state;
    }
}

// acciones
export const obtenerAlumnosAccion = () => async (dispatch, getState) => {
    const offset = getState().alumnos.offset;
    try {
        const res = await axios.get(`http://localhost:3000/api/student?offset=${offset}&limit=10`);
        dispatch({
            type: OBTENER_ALUMNOS_EXITO,
            payload: res.data.data
        });
    } catch (error) {
        console.log(error)
    }
}

export const siguienteAlumnosAccion = (numero) => async (dispatch, getState) => {

    const offset = getState().alumnos.offset;
    const siguiente = offset + numero
    
    try {
        const res = await axios.get(`http://localhost:3000/api/student?offset=${siguiente}&limit=10`)
        dispatch({
            type: SIGUIENTE_ALUMNOS_EXITO,
            payload: {
                array: res.data.data,
                offset:siguiente
            }
        });
    } catch (error) {
        console.log(error)
    }
}