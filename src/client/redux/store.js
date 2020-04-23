import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import profesorReducer from '../redux/profesorDucks.js';
import cursoReducer from '../redux/cursoDucks.js';
import ramoReducer from '../redux/ramoDucks.js';
import alumnoReducer from '../redux/alumnoDucks.js';
import pruebaReducer from '../redux/pruebaDucks.js';

const rootReducer = combineReducers({
    profesores: profesorReducer,
    cursos: cursoReducer,
    ramos: ramoReducer,
    alumnos: alumnoReducer,
    pruebas: pruebaReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore(){
    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
    return store;
}