import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import Navbar from "./components/Navbar";

import {Provider} from 'react-redux'
import generateStore from './redux/store.js'

function App() {
  const store = generateStore();
  return (
    <Provider store={store}>
    <div className="container my-3">
      <h1 className="text-center">Sistema de Cursos</h1>
      <hr/>
      <Navbar></Navbar>
      <hr/>
    </div>
    </Provider>
  );
}

export default App;
