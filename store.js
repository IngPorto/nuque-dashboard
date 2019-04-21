import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const initialState = {
    // estado para gestionar la visibilidad del sub menú de cada perfil de servicio
    visibilidadSubMenuPerfilServicio: false,
    visibilidadModalDescripcionProyecto: false,
    // estado para gestionar los estilos del proyecto seleccionado
    proyectoActualmenteSeleccionado: '',
    proyectos: [
        {
            id: "P-t8t",
            nombre: "Proyecto de conexiones a servicios",
            descripcion: "Escribe una descripción para el proyecto!",
            servicios: [
                "P1B3",
                "3ll0"
            ]
        }
    ],
    servicios: {
        "P1B3": {
            id: "P1B3",
            nombre: "Servicio para Login",
            estado: true,
            fechaCreacion: "21/02/19",
            rutaDeAcceso: "",
            proyecto: "P-t8t"
        },
        "3ll0": {
            id: "3ll0",
            nombre: "Servicio de almacenaje de nombres",
            estado: false,
            fechaCreacion: "12/04/19",
            rutaDeAcceso: "",
            proyecto: "P-t8t"
        }
    }
}

export const actionTypes = {
    cambiarVisibilidadSMPS: 'cambiarVisibilidadSMPS',
    cambiarVisibilidadMDP: 'cambiarVisibilidadMDP',
    cambiarDescripcionProyecto: 'cambiarDescripcionProyecto',
    cambiarProyectoActualmenteSeleccionado: 'cambiarProyectoActualmenteSeleccionado'
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.cambiarVisibilidadSMPS:
            return {...state, visibilidadSubMenuPerfilServicio: action.visibilidad };
            break;
        case actionTypes.cambiarVisibilidadMDP:
            return {...state, visibilidadModalDescripcionProyecto: action.visibilidad };
            break;
        case actionTypes.cambiarProyectoActualmenteSeleccionado:
            return {...state, proyectoActualmenteSeleccionado: action.codigo };
            break;
        case actionTypes.cambiarDescripcionProyecto:
            return {
                    ...state, 
                    proyectos: 
                        [
                            {
                                ...state.proyectos[0], 
                                descripcion: action.textoDescripcionProyecto 
                            }
                        ] 
                    };
            break;
        default: return state;
    }
}

// Metodos de despacho de cambio
export const addCambiarVisibilidadSMPS = visibilidad => dispatch => {
    return dispatch({ type: actionTypes.cambiarVisibilidadSMPS, visibilidad})
}

export const addCambiarVisibilidadMDP = visibilidad => dispatch => {
    return dispatch({ type: actionTypes.cambiarVisibilidadMDP, visibilidad})
}

export const addCambiarDescripcionProyecto = textoDescripcionProyecto => dispatch => {
    return dispatch({ type: actionTypes.cambiarDescripcionProyecto, textoDescripcionProyecto})
}

export const addCambiarProyectoActualmenteSeleccionado = codigo => dispatch => {
    return dispatch({ type: actionTypes.cambiarProyectoActualmenteSeleccionado, codigo})
}

// Creador del Store
export const initStore = (store = initialState) => {
    return createStore(reducer, store, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}