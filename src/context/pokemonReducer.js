import {OBTENER_NOMBRE} from "../type";


export default (state, action) => {
    switch (action.type) {
        case OBTENER_NOMBRE:
            return{
                ...state,
                nombre : action.payload.nombrep
            }
        default:
            return state;
    }
}