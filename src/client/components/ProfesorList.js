import React from "react";
import { Link } from "react-router-dom";

// hooks react redux
import { useDispatch, useSelector } from "react-redux";
import { obtenerProfesoresAccion,siguienteProfesoresAccion } from "../redux/profesorDucks.js";

const ProfesorList = () => {
  const dispatch = useDispatch();
  const listaProfesores = useSelector((store) => store.profesores.array);

  return (
    <div className="container">
      <div className="m-2 pt-2">
        <h3 className="float-left">Lista de Profesores</h3>
        <Link to="/profesorAgg">
          <button className="btn btn-success float-right"> Agregar</button>
        </Link>
        <button className="mr-2 btn btn-primary float-right" onClick={() => dispatch(obtenerProfesoresAccion())}>
          Obtener Profesores
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
            {listaProfesores.length > 0 ? (
              listaProfesores.map((item) => (
                <tr key = {item.id}>
                  <th>{item.id}</th>
                  <td>{item.name}</td>
                  <td>{item.lastname}</td>
                  <td>
                    <div className="d-flex justify-content-around">
                      <Link to={`/profesorEdit/${item.id}`}>
                        <button
                          type="button"
                          className="btn btn-sm btn-warning"
                        >
                          Editar
                        </button>
                      </Link>
                      <Link to={`/profesorElim/${item.id}`}>
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
        <button className="mr-2 mt-2 btn btn-primary float-right" onClick={() => dispatch(siguienteProfesoresAccion(10))}>
          Siguientes Profesores
        </button>
      </div>
    </div>
  );
};

export default ProfesorList;
