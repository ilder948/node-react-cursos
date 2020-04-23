import axios from "axios";

// constantes
const dataInicial = {
  array: [],
  offset: 0,
};

// types
const LLENAR_PROFESORES_EXITO = "LLENAR_PROFESORES_EXITO";
const LLENAR_CURSOS_EXITO = "LLENAR_CURSOS_EXITO";
const LLENAR_RAMOS_EXITO = "LLENAR_RAMOS_EXITO";
const LLENAR_CURSOSRAMOS_EXITO = "LLENAR_CURSOSRAMOS_EXITO";
const LLENAR_ALUMNOS_EXITO = "LLENAR_ALUMNOS_EXITO";
const LLENAR_CURSOSRAMOSALUMNOS_EXITO = "LLENAR_CURSOSRAMOSALUMNOS_EXITO";
const LLENAR_PRUEBAS_EXITO = "LLENAR_PRUEBAS_EXITO";
const LLENAR_CURSOSRAMOSALUMNOSPRUEBAS_EXITO =
  "LLENAR_CURSOSRAMOSALUMNOSPRUEBAS_EXITO";
const LLENAR_NOTAS_EXITO = "LLENAR_NOTAS_EXITO";

// reducer
export default function adminReducer(state = dataInicial, accion) {
  switch (accion.type) {
    case LLENAR_PROFESORES_EXITO:
      return state;
    case LLENAR_CURSOS_EXITO:
      return state;
    case LLENAR_RAMOS_EXITO:
      return state;
    case LLENAR_CURSOSRAMOS_EXITO:
      return state;
    case LLENAR_ALUMNOS_EXITO:
      return state;
    case LLENAR_CURSOSRAMOSALUMNOS_EXITO:
      return state;
    case LLENAR_PRUEBAS_EXITO:
      return state;
    case LLENAR_CURSOSRAMOSALUMNOSPRUEBAS_EXITO:
      return state;
    case LLENAR_NOTAS_EXITO:
      return state;
    default:
      return state;
  }
}

// acciones
export const llenarProfesoresAccion = () => async (dispatch, getState) => {
  try {
    const res = await axios.post(`http://localhost:3000/api/faker/addTeacher`);
    dispatch({
      type: LLENAR_PROFESORES_EXITO,
      payload: res,
    });
  } catch (error) {
    console.log(error);
  }
};

export const llenarCursosAccion = () => async (dispatch, getState) => {
  try {
    const res = await axios.post(`http://localhost:3000/api/faker/addCourse`);
    dispatch({
      type: LLENAR_CURSOS_EXITO,
      payload: res,
    });
  } catch (error) {
    console.log(error);
  }
};

export const llenarRamosAccion = () => async (dispatch, getState) => {
  try {
    const res = await axios.post(`http://localhost:3000/api/faker/addSubject`);
    dispatch({
      type: LLENAR_CURSOS_EXITO,
      payload: res,
    });
  } catch (error) {
    console.log(error);
  }
};

export const llenarCursosRamosAccion = () => async (dispatch, getState) => {
  try {
    const res = await axios.post(
      `http://localhost:3000/api/faker/addCourseSubject`
    );
    dispatch({
      type: LLENAR_CURSOSRAMOS_EXITO,
      payload: res,
    });
  } catch (error) {
    console.log(error);
  }
};

export const llenarAlumnosAccion = () => async (dispatch, getState) => {
  try {
    const res = await axios.post(`http://localhost:3000/api/faker/addStudent`);
    dispatch({
      type: LLENAR_ALUMNOS_EXITO,
      payload: res,
    });
  } catch (error) {
    console.log(error);
  }
};

export const llenarCursosRamosAlumnosAccion = () => async (
  dispatch,
  getState
) => {
  try {
    const res = await axios.post(
      `http://localhost:3000/api/faker/addCourseSubjectStudent`
    );
    dispatch({
      type: LLENAR_CURSOSRAMOSALUMNOS_EXITO,
      payload: res,
    });
  } catch (error) {
    console.log(error);
  }
};

export const llenarPruebasAccion = () => async (dispatch, getState) => {
  try {
    const res = await axios.post(`http://localhost:3000/api/faker/addTest`);
    dispatch({
      type: LLENAR_PRUEBAS_EXITO,
      payload: res,
    });
  } catch (error) {
    console.log(error);
  }
};

export const llenarCursosRamosAlumnosPruebasAccion = () => async (
  dispatch,
  getState
) => {
  try {
    const res = await axios.post(
      `http://localhost:3000/api/faker/addCourseSubjectStudentTest`
    );
    dispatch({
      type: LLENAR_CURSOSRAMOSALUMNOSPRUEBAS_EXITO,
      payload: res,
    });
  } catch (error) {
    console.log(error);
  }
};

export const llenarNotasAccion = () => async (dispatch, getState) => {
  try {
    const res = await axios.post(
      `http://localhost:3000/api/faker/qualification`
    );
    dispatch({
      type: LLENAR_NOTAS_EXITO,
      payload: res,
    });
  } catch (error) {
    console.log(error);
  }
};
