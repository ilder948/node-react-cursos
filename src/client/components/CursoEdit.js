import React, { Fragment,useState } from "react";
import { useForm } from "react-hook-form";

const CursoEdit = () => {
    const { register, errors, handleSubmit } = useForm();

    const [curso, setCurso] = useState([]);
  
      const guardarCurso = (data, e) => {
          console.log(data);
          setCurso([
              ...curso,
              data
          ])
          // limpiar campos
          e.target.reset();
      }
    return (
      <Fragment>
        <h2>Editar Curso</h2>
        <form onSubmit={handleSubmit(guardarCurso)}>
          <input
            placeholder="Ingrese el nombre del curso"
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
          <select className="form-control" name="profesor"
          ref={register({
            required: {
              value: true,
              message: "Seleccione un profesor",
            }
          })}>
            <option value="" selected>Seleccione un Profesor</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <span className="text-danger text-small d-block mb-2">
            {errors?.profesor?.message}
          </span>
          <button type="submit" className="btn btn-primary">
            Editar
          </button>
        </form>
      </Fragment>
    );
}
 
export default CursoEdit;