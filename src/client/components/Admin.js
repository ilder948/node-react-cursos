import React, { Fragment } from "react";

// hooks react redux
import { useDispatch } from "react-redux";
import {
  llenarProfesoresAccion, llenarCursosAccion, llenarRamosAccion, llenarCursosRamosAccion, llenarAlumnosAccion, llenarCursosRamosAlumnosAccion, llenarPruebasAccion, llenarCursosRamosAlumnosPruebasAccion, llenarNotasAccion
} from "../redux/adminDucks.js";

const Admin = () => {
  const dispatch = useDispatch();
  return (
    <Fragment>
      <div className="row m-2">
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Agregar Profesores</h5>
              <p className="card-text">
                Se necesita poblar el sistema con información de Profesores
              </p>
                <button type="submit" className="btn btn-primary" onClick={() => dispatch(llenarProfesoresAccion())}>
                Agg Profesores
                </button>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Agregar Cursos</h5>
              <p className="card-text">
                Se necesita poblar el sistema con información de Cursos
              </p>
              <button type="submit" className="btn btn-primary" onClick={() => dispatch(llenarCursosAccion())}>
                Agg Cursos
              </button>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Agregar Ramos</h5>
              <p className="card-text">
                Se necesita poblar el sistema con información de Ramos
              </p>
              <button type="submit" className="btn btn-primary" onClick={() => dispatch(llenarRamosAccion())}>
                Agg Ramos
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row m-2">
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Agregar Cursos - Ramos</h5>
              <p className="card-text">
                Se necesita poblar el sistema con información de Cursos -
                Ramos
              </p>
              <button type="submit" className="btn btn-primary" onClick={() => dispatch(llenarCursosRamosAccion())}>
                Agg Cursos - Ramos
              </button>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Agregar Estudiantes</h5>
              <p className="card-text">
                Se necesita poblar el sistema con información de Estudiantes
              </p>
              <button type="submit" className="btn btn-primary" onClick={() => dispatch(llenarAlumnosAccion())}>
                Agg Estudiantes
              </button>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Agregar Ramos - Estudiantes</h5>
              <p className="card-text">
                Se necesita poblar el sistema con información de Ramos -
                Estudiantes
              </p>
              <button type="submit" className="btn btn-primary" onClick={() => dispatch(llenarCursosRamosAlumnosAccion())}>
                Agg Ramos - Estudiantes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row m-2">
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Agregar Pruebas</h5>
              <p className="card-text">
                Se necesita poblar el sistema con información de Pruebas
              </p>
              <button type="submit" className="btn btn-primary" onClick={() => dispatch(llenarPruebasAccion())}>
                Agg Pruebas
              </button>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Agregar Pruebas - Estudiantes</h5>
              <p className="card-text">
                Se necesita poblar el sistema con información de Pruebas -
                Estudiantes
              </p>
              <button type="submit" className="btn btn-primary" onClick={() => dispatch(llenarCursosRamosAlumnosPruebasAccion())}>
                Agg Pruebas - Estudiantes
              </button>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Agregar Notas</h5>
              <p className="card-text">
                Se necesita poblar el sistema con información de Notas
              </p>
              <button type="submit" className="btn btn-primary" onClick={() => dispatch(llenarNotasAccion())}>
                Agg Notas
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Admin;
