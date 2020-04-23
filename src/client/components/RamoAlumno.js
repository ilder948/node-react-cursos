import React, { Fragment,useState } from "react";
import { useForm } from "react-hook-form";

const RamoAlumno = () => {
  const { register, errors, handleSubmit } = useForm();
  const [ramoalumno, setRamoAlumno] = useState([]);

    const guardarRamoAlumno = (data, e) => {
        console.log(data);
        setRamoAlumno([
            ...ramoalumno,
            data
        ])
        // limpiar campos
        e.target.reset();
    }
  return (
    <Fragment>
      <h2>Agregar Alumno a un Ramo</h2>
      <form onSubmit={handleSubmit(guardarRamoAlumno)}>
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
              Seleccione un Alumno
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
        
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </Fragment>
  );
};

export default RamoAlumno;
