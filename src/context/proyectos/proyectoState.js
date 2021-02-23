import React, {useReducer} from 'react';

import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import {FORMULARIO_PROYECTO, OBTENER_PROYECTOS } from '../../types';

const proyectos = [
    {id: 1, nombre: 'tienda virtual'},
    {id: 2, nombre: 'Intranet'},
    {id: 3, nombre: 'Diseño se sitio web'},
    {id: 4, nombre: 'MERN'}
]


const ProyectoState = props => {
    const initialState = {
        proyectos: [],
        formulario : false
    }

    const [state, dispatch] = useReducer(proyectoReducer, initialState)

    // FUNCIONES PARA EL CRUD
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    // obtener los proycetos
    const obtenerProyectos = proyectos => {
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: proyectos
        })
    }

    return (
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                mostrarFormulario,
                obtenerProyectos
            }}
        
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;