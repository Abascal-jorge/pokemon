import React, { useReducer } from 'react';
import pokemonContext from "./pokemonContext";
import pokemonReducer from "./pokemonReducer";
import {OBTENER_NOMBRE} from "../type";

const PokemonState = (props) => {

    const initialstate = {
        nombre: null
    }

    const [state, dispatch] = useReducer(pokemonReducer, initialstate);

    const obtenerNombre = nombre => {
        dispatch({
            type: OBTENER_NOMBRE,
            payload: nombre
        });
    }

    return ( 
        <pokemonContext.Provider
            value={{
                obtenerNombre
            }}
        >
            {props.children}
        </pokemonContext.Provider>
     );
}
 
export default PokemonState;