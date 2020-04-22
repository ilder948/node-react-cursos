import React, { Fragment,useState } from "react";
import { useForm } from "react-hook-form";

const RamoEdit = () => {
    const { register, errors, handleSubmit } = useForm();
    const [ramo, setRamo] = useState([]);
  
    const guardarRamo = (data, e) => {
        console.log(data);
        setRamo([
            ...ramo,
            data
        ])
        // limpiar campos
        e.target.reset();
    }
    return ( 
        <Fragment>
        <h2>Editar Ramo</h2>
        <form onSubmit={handleSubmit(guardarRamo)}>
          <input
            placeholder="Ingrese el nombre del ramo"
            className="form-control mb-2"
            name="nombre"
            ref={register({
              required: {
                value: true,
                message: "Nombre es requerido",
              },
              maxLength: {
                value: 50,
                message: "No más de 50 carácteres!",
              },
              minLength: {
                value: 2,
                message: "Mínimo 2 carácteres",
              },
            })}
          ></input>
          <span className="text-danger text-small d-block mb-2">
            {errors?.nombre?.message}
          </span>
          <select className="form-control" name="curso"
          ref={register({
            required: {
              value: true,
              message: "Seleccione un Curso",
            }
          })}>
            <option value="" selected>Seleccione un Curso</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <span className="text-danger text-small d-block mb-2">
            {errors?.curso?.message}
          </span>
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </form>
      </Fragment>
     );
}
 
export default RamoEdit;