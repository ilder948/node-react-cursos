import React, { Fragment,useState } from "react";
import { useForm } from "react-hook-form";


const PruebaEdit = () => {
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
      <h2>Editar Prueba</h2>
      <form onSubmit={handleSubmit(guardarPrueba)}>
        <input
          placeholder="Ingrese el nombre de la prueba"
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
        <select className="form-control" name="ramo"
          ref={register({
            required: {
              value: true,
              message: "Seleccione un ramo",
            }
          })}>
            <option value="" selected>Seleccione un Ramo</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <span className="text-danger text-small d-block mb-2">
            {errors?.ramo?.message}
          </span>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </Fragment>
  );
};

export default PruebaEdit;
