import React, { Fragment,useState } from "react";
import { useForm } from "react-hook-form";

const ProfesorEdit = () => {
  const { register, errors, handleSubmit } = useForm();
  const [prueba, setPrueba] = useState([]);

    const guardarPrueba = (data, e) => {
        console.log(data);
        setPrueba([
            ...prueba,
            data
        ])
        // limpiar campos
        e.target.reset();
    }
  return (
    <Fragment>
      <h2>Editar Profesor</h2>
      <form onSubmit={handleSubmit(guardarPrueba)}>
        <input
          placeholder="Ingrese el nombre del profesor"
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
        <input
          placeholder="Ingrese el apellido del profesor"
          className="form-control mb-2"
          name="apellido"
          ref={register({
            required: {
              value: true,
              message: "Apellido es requerido",
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
          {errors?.apellido?.message}
        </span>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </Fragment>
  );
};

export default ProfesorEdit;
;