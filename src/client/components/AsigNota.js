import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";

const AsignNota = () => {
  const { register, errors, handleSubmit } = useForm();
  const [asigNota, setAsigNota] = useState([]);

  const guardarNota = (data, e) => {
    console.log(data);
    setAsigNota([...asigNota, data]);
    // limpiar campos
    e.target.reset();
  };
  return (
    <Fragment>
      <h2>Asignar Nota</h2>
      <form onSubmit={handleSubmit(guardarNota)}>
        <div className="form-group">
          <select
            className="form-control"
            name="curso"
            ref={register({
              required: {
                value: true,
                message: "Curso es requerido",
              },
            })}
          >
            <option value="" selected>
              Seleccione un Curso
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <span className="text-danger text-small d-block mb-2">
            {errors?.curso?.message}
          </span>
        </div>
        <div className="form-group">
          <select
            className="form-control"
            name="ramo"
            ref={register({
              required: {
                value: true,
                message: "Ramo es requerido",
              },
            })}
          >
            <option value="" selected>
              Seleccione un Ramo
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <span className="text-danger text-small d-block mb-2">
            {errors?.ramo?.message}
          </span>
        </div>
        <div className="form-group">
        <select
            className="form-control"
            name="alumno"
            ref={register({
              required: {
                value: true,
                message: "Alumno es requerido",
              },
            })}
          >
            <option value="" selected>
              Seleccione una Alumno
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <span className="text-danger text-small d-block mb-2">
            {errors?.alumno?.message}
          </span>
        </div>
        <div className="form-group">
          <select
            className="form-control"
            name="prueba"
            ref={register({
              required: {
                value: true,
                message: "Prueba es requerido",
              },
            })}
          >
            <option value="" selected>
              Seleccione una Prueba
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <span className="text-danger text-small d-block mb-2">
            {errors?.prueba?.message}
          </span>
        </div>
        
        <div className="form-group">
          <input
            type="number"
            placeholder="Ingrese nota del alumno"
            className="form-control mb-2"
            name="nota"
            ref={register({
              required: {
                value: true,
                message: "Nota es requerida",
              },
              max: {
                value: 20,
                message: "No puede ser un valor mayor a 20!",
              },
              min: {
                value: 1,
                message: "No puede ser un valor menor a 1!",
              },
            })}
          ></input>
          <span className="text-danger text-small d-block mb-2">
            {errors?.nota?.message}
          </span>
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </Fragment>
  );
};

export default AsignNota;
