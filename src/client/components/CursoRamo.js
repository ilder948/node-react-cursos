import React, { Fragment,useState } from "react";
import { useForm } from "react-hook-form";

const CursoRamo = () => {
  const { register, errors, handleSubmit } = useForm();
  const [cursoramo, setCursoRamo] = useState([]);

    const guardarCursoRamo = (data, e) => {
        console.log(data);
        setCursoRamo([
            ...cursoramo,
            data
        ])
        // limpiar campos
        e.target.reset();
    }
  return (
    <Fragment>
      <h2>Agregar Ramo a un Curso</h2>
      <form onSubmit={handleSubmit(guardarCursoRamo)}>
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
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </Fragment>
  );
};

export default CursoRamo;
