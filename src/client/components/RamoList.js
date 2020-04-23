import React from "react";
import { Link } from "react-router-dom";

// hooks react redux
import { useDispatch, useSelector } from "react-redux";
import {
  obtenerRamosAccion,
  siguienteRamosAccion,
} from "../redux/ramoDucks.js";

const RamoList = () => {
  const dispatch = useDispatch();
  const listaRamos = useSelector((store) => store.ramos.array);

  return (
    <div className="container">
      <div className="m-2 pt-2">
        <h3 className="float-left">Lista de Ramos</h3>
        <Link to="/ramoAgg">
          <button className="btn btn-success float-right"> Agregar</button>
        </Link>
        <button
          className="mr-2 btn btn-primary float-right"
          onClick={() => dispatch(obtenerRamosAccion())}
        >
          Obtener Ramos
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
            {listaRamos.length > 0 ? (
              listaRamos.map((item) => (
                <tr key={item.id}>
                  <th>{item.id}</th>
                  <td>{item.name}</td>
                  <td>
                    <div className="d-flex justify-content-around">
                      <Link to={`/ramoAlumno/${item.id}`}>
                        <button
                          type="button"
                          className="btn btn-sm btn-primary"
                        >
                          Agregar Alumno
                        </button>
                      </Link>
                      <Link to={`/ramoEdit/${item.id}`}>
                        <button
                          type="button"
                          className="btn btn-sm btn-warning"
                        >
                          Editar
                        </button>
                      </Link>
                      <Link to={`/ramoElim/${item.id}`}>
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
          onClick={() => dispatch(siguienteRamosAccion(10))}
        >
          Siguientes Ramos
        </button>
      </div>
    </div>
  );
};

export default RamoList;
