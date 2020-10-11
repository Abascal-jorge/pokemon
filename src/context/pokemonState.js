import React, { useReducer, useEffect } from 'react';
import pokemonContext from "./pokemonContext";
import pokemonReducer from "./pokemonReducer";
import axios from "axios";
import {OBTENER_NOMBRE,
        DATOS_API,
        ERROR_DATOS,
        SPINNER_DATOS} from "../type";

const PokemonState = (props) => {

    const initialstate = {
        nombre: null,
        resultado: null,
        error: false,
        spinner: false
    }

    const [state, dispatch] = useReducer(pokemonReducer, initialstate);

    const obtenerNombre = async nombre => {
        dispatch({
            type: OBTENER_NOMBRE,
            payload: nombre
        });
    }

    useEffect(() => {
        if (state.nombre === null) return;
        const llamandoAPI = async () => {
            const url = `https://pokeapi.co/api/v2/pokemon/${state.nombre}/`;
    
            const datoobtenido = await axios.get(url);
            dispatch({
                type: DATOS_API,
                payload: datoobtenido
            });
        }
        spinnerdatos(true);
        setTimeout(() => {
            spinnerdatos(false);
        }, 3000);
        llamandoAPI();
    }, [state.nombre]);

    //VACIAR DATOS API
    const errorDatos = ()=>{

        dispatch({
            type: ERROR_DATOS,
            payload: true
        });

        setTimeout(() => {
            dispatch({
                type: ERROR_DATOS,
                payload: false
            });
        }, 5000);
    }
    //Activar spinner 
    const spinnerdatos = (estado) =>{
        dispatch({
            type: SPINNER_DATOS,
            payload: estado
        });
    }

    return ( 
        <pokemonContext.Provider
            value={{
                resultado: state.resultado,
                error: state.error,
                spinner: state.spinner,
                obtenerNombre,
                errorDatos
            }}
        >
            {props.children}
        </pokemonContext.Provider>
     );
}
 
export default PokemonState;