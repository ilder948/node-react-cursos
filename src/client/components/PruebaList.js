import React from "react";
import { Link } from "react-router-dom";

// hooks react redux
import { useDispatch, useSelector } from "react-redux";
import { obtenerPruebasAccion,siguientePruebasAccion } from "../redux/pruebaDucks.js";

const PruebaList = () => {
  const dispatch = useDispatch();
  const listaPruebas = useSelector((store) => store.pruebas.array);
  return (
    <div className="container">
      <div className="m-2 pt-2">
        <h3 className="float-left">Lista de Pruebas</h3>
        <Link to="/pruebaAgg">
          <button className="btn btn-success float-right"> Agregar</button>
        </Link>
        <button className="mr-2 btn btn-primary float-right" onClick={() => dispatch(obtenerPruebasAccion())}>
          Obtener Pruebas
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
            {listaPruebas.length > 0 ? (
              listaPruebas.map((item) => (
                <tr key = {item.id}>
                  <th>{item.id}</th>
                  <td>{item.name}</td>
                  <td>
                    <div className="d-flex justify-content-around">
                      <Link to={`/pruebaEdit/${item.id}`}>
                        <button
                          type="button"
                          className="btn btn-sm btn-warning"
                        >
                          Editar
                        </button>
                      </Link>
                      <Link to={`/pruebaElim/${item.id}`}>
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
        <button className="mr-2 mt-2 btn btn-primary float-right" onClick={() => dispatch(siguientePruebasAccion(10))}>
          Siguientes Pruebas
        </button>
      </div>
    </div>
  );
};

export default PruebaList;
