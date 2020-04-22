import React from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { Link } from "react-router-dom";

const ProfesorList = () => {
  const alumnos = [
    {id:1,nombre:'A',apellido:1,accion:<div className='d-flex justify-content-around'>
      <Link to={`/profesorEdit/1`}><button type='button' className='btn btn-sm btn-warning'> Editar</button></Link>
      <Link to="/profesorElim"><button type='button' className='btn btn-sm btn-danger'> Eliminar</button></Link>
      </div>},
  ];
  const columnas = [{
    dataField: 'id',
    text: 'ID'
  }, {
    dataField: 'nombre',
    text: 'Nombre'
  }, {
    dataField: 'apellido',
    text: 'Apellido'
  },{
    dataField: 'accion',
    text: 'Acciones'
  }];
 

  return (
    <div className="container">
      <div className="m-2 pt-2">
        <h3 className="float-left">Lista de Profesores</h3>
        <Link to="/profesorAgg"><button className='btn btn-success float-right'> Agregar</button></Link>
      </div>
      <div className="m-2 pt-2">
      <BootstrapTable bootstrap4 keyField='id' data={ alumnos } columns={ columnas } pagination={ paginationFactory() } />
      </div>
    </div>
  );
};

export default ProfesorList;
