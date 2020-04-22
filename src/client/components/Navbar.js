import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import AlumnoList from "./AlumnoList";
import AlumnoAgg from "./AlumnoAgg";
import AlumnoEdit from "./AlumnoEdit";

import ProfesorList from "./ProfesorList";
import ProfesorAgg from "./ProfesorAgg";
import ProfesorEdit from "./ProfesorEdit";

import CursoList from "./CursoList";
import CursoAgg from "./CursoAgg";
import CursoEdit from "./CursoEdit";

import RamoList from "./RamoList";
import RamoAgg from "./RamoAgg";
import RamoEdit from "./RamoEdit";

import PruebaList from "./PruebaList";
import PruebaAgg from "./PruebaAgg";
import PruebaEdit from "./PruebaEdit";

import AsignNota from "./AsigNota";

const Navbar = () => {
  return (
    <Router>
    <div className="container">
      <nav className="navbar navbar-expand-sm justify-content-around text-muted">
        <Link to="/" className="nav-link">
          Cursos <i className="fa fa-puzzle-piece"></i> 
        </Link> 
        <Link to="/ramos" className="nav-link">
          Ramos <i className="fa fa-book"></i>
        </Link>
        <Link to="/profesores" className="nav-link">
          Profesores <i className="fa fa-user"></i>
        </Link>
        <Link to="/alumnos" className="nav-link">
          Alumnos <i className="fa fa-users"></i>
        </Link>
        <Link to="/pruebas" className="nav-link">
          Pruebas <i className="fa fa-file"></i>
        </Link>
        <Link to="/notas" className="nav-link">
          Asignar Notas <i className="fa fa-star"></i>
        </Link>
      </nav>
    </div>
    <Switch>
  <Route path="/alumnos">
    <AlumnoList></AlumnoList>
  </Route>
  <Route path="/alumnoAgg">
    <AlumnoAgg></AlumnoAgg>
  </Route>
  <Route path="/alumnoEdit/:id">
    <AlumnoEdit></AlumnoEdit>
  </Route>
  <Route path="/alumnoElim/:id"></Route>

  <Route path="/profesores">
    <ProfesorList></ProfesorList>
  </Route>
  <Route path="/profesorAgg">
    <ProfesorAgg></ProfesorAgg>
  </Route>
  <Route path="/profesorEdit/:id">
    <ProfesorEdit></ProfesorEdit>
  </Route>
  <Route path="/profesorElim/:id"></Route>
  <Route path="/" exact>
    <CursoList></CursoList>
  </Route>
  <Route path="/cursoAgg">
    <CursoAgg></CursoAgg>
  </Route>
  <Route path="/cursoEdit/:id">
    <CursoEdit></CursoEdit>
  </Route>
  <Route path="/cursoElim/:id"></Route>
  <Route path="/ramos">
    <RamoList></RamoList>
  </Route>
  <Route path="/ramoAgg">
    <RamoAgg></RamoAgg>
  </Route>
  <Route path="/ramoEdit/:id">
    <RamoEdit></RamoEdit>
  </Route>
  <Route path="/ramoElim/:id"></Route>
  <Route path="/pruebas">
    <PruebaList></PruebaList>
  </Route>
  <Route path="/pruebaAgg">
    <PruebaAgg></PruebaAgg>
  </Route>
  <Route path="/pruebaEdit/:id">
    <PruebaEdit></PruebaEdit>
  </Route>
  <Route path="/pruebaElim/:id"></Route>
  <Route path="/notas">
    <AsignNota></AsignNota>
  </Route>
</Switch>
  </Router>
  
  );
};

export default Navbar;