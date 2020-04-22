import React, { Fragment,useState } from "react";
import { useForm } from "react-hook-form";

const AlumnoEdit = () => {
  const { register, errors, handleSubmit } = useForm();
  const [alumno, setAlumno] = useState([]);

    const guardarAlumno = (data, e) => {
        console.log(data);
        setAlumno([
            ...alumno,
            data
        ])
        // limpiar campos
        e.target.reset();
    }
  return (
    <Fragment>
      <h2>Editar Alumno</h2>
      <form onSubmit={handleSubmit(guardarAlumno)}>
        <input
          placeholder="Ingrese el nombre del alumno"
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
          placeholder="Ingrese el apellido del alumno"
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
          Editar
        </button>
      </form>
    </Fragment>
  );
};

export default AlumnoEdit;
