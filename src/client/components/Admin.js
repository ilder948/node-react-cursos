import React, { Fragment } from "react";

const Admin = () => {
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
              <button type="submit" className="btn btn-primary">
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
              <button type="submit" className="btn btn-primary">
                Agg Cursos
              </button>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Agregar Materias</h5>
              <p className="card-text">
                Se necesita poblar el sistema con información de Materias
              </p>
              <button type="submit" className="btn btn-primary">
                Agg Materias
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row m-2">
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Agregar Cursos - Materias</h5>
              <p className="card-text">
                Se necesita poblar el sistema con información de Cursos - Materias
              </p>
              <button type="submit" className="btn btn-primary">
                Agg Cursos - Materias
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
              <button type="submit" className="btn btn-primary">
                Agg Estudiantes
              </button>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Agregar Materias - Estudiantes</h5>
              <p className="card-text">
                Se necesita poblar el sistema con información de Materias - Estudiantes
              </p>
              <button type="submit" className="btn btn-primary">
                Agg Materias - Estudiantes
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
              <button type="submit" className="btn btn-primary">
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
                Se necesita poblar el sistema con información de Pruebas - Estudiantes
              </p>
              <button type="submit" className="btn btn-primary">
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
              <button type="submit" className="btn btn-primary">
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
