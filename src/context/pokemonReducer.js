import {DATOS_API, OBTENER_NOMBRE, ERROR_DATOS, SPINNER_DATOS} from "../type";


export default (state, action) => {
    switch (action.type) {
        case OBTENER_NOMBRE:
            return{
                ...state,
                nombre : action.payload.nombrep
            }
        case DATOS_API:
            return{
                ...state,
                resultado: action.payload.data
            }
        case ERROR_DATOS:
            return{
                ...state,
                error:  action.payload
            }
        case SPINNER_DATOS:
            return{
                ...state,
                spinner: action.payload
            }
        default:
            return state;
    }
}