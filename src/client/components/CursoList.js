import React from "react";
import { Link } from "react-router-dom";

// hooks react redux
import { useDispatch, useSelector } from "react-redux";
import {
  obtenerCursosAccion,
  siguienteCursosAccion,
} from "../redux/cursoDucks.js";

const CursoList = () => {
  const dispatch = useDispatch();
  const listaCursos = useSelector((store) => store.cursos.array);
  return (
    <div className="container">
      <div className="m-2 pt-2">
        <h3 className="float-left">Lista de Cursos</h3>
        <Link to="/cursoAgg">
          <button className="btn btn-success float-right"> Agregar</button>
        </Link>
        <button
          className="mr-2 btn btn-primary float-right"
          onClick={() => dispatch(obtenerCursosAccion())}
        >
          Obtener Cursos
        </button>
      </div>
      <div className="m-2 pt-2">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {listaCursos.length > 0 ? (
              listaCursos.map((item) => (
                <tr key={item.id}>
                  <th>{item.id}</th>
                  <td>{item.name}</td>
                  <td>
                    <div className="d-flex justify-content-around">
                      <Link to={`/cursoRamo/${item.id}`}>
                        <button
                          type="button"
                          className="btn btn-sm btn-primary"
                        >
                          Agregar Ramo
                        </button>
                      </Link>
                      <Link to={`/cursoEdit/${item.id}`}>
                        <button
                          type="button"
                          className="btn btn-sm btn-warning"
                        >
                          Editar
                        </button>
                      </Link>
                      <Link to={`/cursoElim/${item.id}`}>
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
              </tr>
            )}
          </tbody>
        </table>
        <button
          className="mr-2 mt-2 btn btn-primary float-right"
          onClick={() => dispatch(siguienteCursosAccion(10))}
        >
          Siguientes Cursos
        </button>
      </div>
    </div>
  );
};

export default CursoList;
