import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const initialState = {
    visibilidadSubMenuPerfilServicio: false
}

export const actionTypes = {
    cambiarVisibilidadSMPS: 'cambiarVisibilidadSMPS'
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.cambiarVisibilidadSMPS:
            return {...state, visibilidadSubMenuPerfilServicio: action.visibilidad };
            break;
        default: return state;
    }
}

export const addCambiarVisibilidadSMPS = visibilidad => dispatch => {
    return dispatch({ type: actionTypes.cambiarVisibilidadSMPS, visibilidad})
}

export const initStore = (store = initialState) => {
    return createStore(reducer, store, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}