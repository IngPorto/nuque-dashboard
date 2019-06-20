import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import {format} from 'date-fns'

const initialState = {
    // estado para gestionar la visibilidad del sub menú de cada perfil de servicio
    visibilidadSubMenuPerfilServicio: false,
    visibilidadModalDescripcionProyecto: false,
    // estado para gestionar los estilos del proyecto seleccionado
    proyectoActualmenteSeleccionado: '',
    // estado para saber si estoy en un el playground, y de donde obtener los datos de
    // servicio y dónde guardarlos
    servicioActualmenteSeleccionado: '',
    // estado para cambian entre el PanelDeServicios y el Playground
    visibilidadPlayground: false,
    proyectos: [
        {
            id: "P-t8t",
            nombre: "Proyecto de conexiones a servicios",
            descripcion: "Escribe una descripción para el proyecto!",
            servicios: [
                "P1B3",
                "3ll0"
            ]
        },
        {
            id: "P-as2",
            nombre: "Intercambio de datos de sensores",
            descripcion: "Servicios de interconección de sensores conectados a internet.",
            servicios: [
                "F3WE",
                "L32Q",
                "MXM1"
            ]
        }
    ],
    servicios: {
        "P1B3": {
            id: "P1B3",
            nombre: "Servicio para Login",
            toggle: "ToggleOn",
            fechaCreacion: "21/02/19",
            rutaDeAcceso: "",
            proyecto: "P-t8t"
        },
        "3ll0": {
            id: "3ll0",
            nombre: "Servicio de almacenaje de nombres",
            toggle: "ToggleOff",
            fechaCreacion: "12/04/19",
            rutaDeAcceso: "",
            proyecto: "P-t8t"
        },
        "F3WE": {
            id: "F3WE",
            nombre: "Almacenar datos climáticos",
            toggle: "ToggleOn",
            fechaCreacion: "22/05/19",
            rutaDeAcceso: "",
            proyecto: "P-as2"
        },
        "L32Q": {
            id: "L32Q",
            nombre: "Actualizar código de sensor",
            toggle: "ToggleOn",
            fechaCreacion: "21/05/19",
            rutaDeAcceso: "",
            proyecto: "P-as2"
        },
        "MXM1": {
            id: "MXM1",
            nombre: "Matricular sensor",
            toggle: "ToggleOn",
            fechaCreacion: "23/06/19",
            rutaDeAcceso: "",
            proyecto: "P-as2"
        }
    }
}

export const actionTypes = {
    cambiarVisibilidadSMPS: 'cambiarVisibilidadSMPS',
    cambiarVisibilidadMDP: 'cambiarVisibilidadMDP',
    cambiarDescripcionProyecto: 'cambiarDescripcionProyecto',
    cambiarProyectoActualmenteSeleccionado: 'cambiarProyectoActualmenteSeleccionado',
    crearNuevoProyecto: 'crearNuevoProyecto',
    crearNuevoServicio: 'crearNuevoServicio',
    visibilidadPlayground: 'visibilidadPlayground',
    cambiarServicioActualmenteSeleccionado : 'cambiarServicioActualmenteSeleccionado'
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
            state.proyectos[parseInt(action.data.proyectoActualmenteSeleccionado)].descripcion = action.data.textoDescripcionProyecto 
            return {
                    ...state
                    };
            break;
        case actionTypes.crearNuevoProyecto:
            state.proyectos.push({
                id: "P-" + stringAleatorio(3),
                nombre: action.data.nombre,
                descripcion: action.data.descripcion,
                servicios: []
            })
            return { ...state };
            break;
        case actionTypes.crearNuevoServicio:
            const id = stringAleatorio(4)
            state.proyectos[parseInt(action.data.proyectoActualmenteSeleccionado)].servicios.push(id)
            const proyectoActual = state.proyectos[parseInt(action.data.proyectoActualmenteSeleccionado)].id

            state.servicios[id] = {
                id: id,
                nombre: action.data.nombre,
                toggle: "ToggleOn",
                fechaCreacion: format(new Date(), 'MM/DD/YYYY'),
                rutaDeAcceso: "/user_service/"+ proyectoActual + "/" + id,
                proyecto: proyectoActual
            }

            // defino como servicio actual el último servicio creado
            state.servicioActualmenteSeleccionado = id
            
            return { ...state };
            break;
        case actionTypes.visibilidadPlayground:
            return {...state, visibilidadPlayground: action.visibilidad };
            break;
        case actionTypes.cambiarServicioActualmenteSeleccionado:
            return {...state, servicioActualmenteSeleccionado: action.codigo };
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

export const addCambiarDescripcionProyecto = (proyectoActualmenteSeleccionado, textoDescripcionProyecto) => dispatch => {
    return dispatch({ type: actionTypes.cambiarDescripcionProyecto, data: {proyectoActualmenteSeleccionado, textoDescripcionProyecto} })
}

export const addCambiarProyectoActualmenteSeleccionado = codigo => dispatch => {
    return dispatch({ type: actionTypes.cambiarProyectoActualmenteSeleccionado, codigo})
}

export const addCrearNuevoProyecto = (nombre, descripcion) => dispatch => {
    return dispatch({ type: actionTypes.crearNuevoProyecto, data: {nombre, descripcion} })
}

export const addCrearNuevoServicio = (nombre, descripcion, proyectoActualmenteSeleccionado) => dispatch => {
    return dispatch({ type: actionTypes.crearNuevoServicio, data: {nombre, descripcion, proyectoActualmenteSeleccionado} })
}

export const addVisibilidadPlayground = visibilidad => dispatch => {
    return dispatch({ type: actionTypes.visibilidadPlayground, visibilidad })
}

export const addCambiarServicioActualmenteSeleccionado = codigo => dispatch => {
    return dispatch({ type: actionTypes.cambiarServicioActualmenteSeleccionado, codigo })
}

// Creador del Store
export const initStore = (store = initialState) => {
    return createStore(reducer, store, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}


function stringAleatorio(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}