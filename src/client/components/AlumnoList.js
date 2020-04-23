import React from "react";
import { Link } from "react-router-dom";

// hooks react redux
import { useDispatch, useSelector } from "react-redux";
import { obtenerAlumnosAccion,siguienteAlumnosAccion } from "../redux/alumnoDucks.js";

const AlumnoList = () => {
  const dispatch = useDispatch();
  const listaAlumnos = useSelector((store) => store.alumnos.array);

  return (
    <div className="container">
      <div className="m-2 pt-2">
        <h3 className="float-left">Lista de Alumnos</h3>
        <Link to="/profesorAgg">
          <button className="btn btn-success float-right"> Agregar</button>
        </Link>
        <button className="mr-2 btn btn-primary float-right" onClick={() => dispatch(obtenerAlumnosAccion())}>
          Obtener Alumnos
        </button>
      </div>
      <div className="m-2 pt-2">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {listaAlumnos.length > 0 ? (
              listaAlumnos.map((item) => (
                <tr key = {item.id}>
                  <th>{item.id}</th>
                  <td>{item.name}</td>
                  <td>{item.lastname}</td>
                  <td>
                    <div className="d-flex justify-content-around">
                      <Link to={`/alumnoEdit/${item.id}`}>
                        <button
                          type="button"
                          className="btn btn-sm btn-warning"
                        >
                          Editar
                        </button>
                      </Link>
                      <Link to={`/alumnoElim/${item.id}`}>
                        <button type="button" className="btn btn-sm btn-danger">
                          Eliminar
                        </button>
                      </Link>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <th></th>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            )}
          </tbody>
        </table>
        <button className="mr-2 mt-2 btn btn-primary float-right" onClick={() => dispatch(siguienteAlumnosAccion(10))}>
          Siguientes Alumnos
        </button>
      </div>
    </div>
  );
};

export default AlumnoList;
