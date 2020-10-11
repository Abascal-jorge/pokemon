import React, { useContext, useState, Fragment } from 'react';
import Listadopokemon from "./Listadopokemon";
import pokemonContext from "../../context/pokemonContext";
import Spinner from "../Spinner";

const Form = () => {

    const PokemonContext = useContext(pokemonContext);
    const {resultado, error, spinner, obtenerNombre, errorDatos} = PokemonContext;

    //Crewando state para guatrdar el nombre del pokemon
    const [pokemon, guardarpokemon] = useState({
        nombrep : ""
    });
    const {nombrep} = pokemon;

    //Funcion text box guardar nombre 
    const onChange = (e) => {
        guardarpokemon({
            ...pokemon,
            [e.target.name] : e.target.value.toLowerCase()
        });   
    }

    //funcion boton
    const onConsultar  = (e) =>{
        e.preventDefault();
        //Validar Formulario
        if(nombrep === ""){
            errorDatos();
            return;
        }
        obtenerNombre(pokemon);
    }

    //Cargando pokemon
    const acciondatos = spinner ? <Spinner/> : <Listadopokemon resultado = {resultado}/>;

    return ( 
        <Fragment>
        <form>
            {error? <p>Los campos son Obligatorios</p>: null}
            <div>
                <label htmlFor="nombrep">Ingresa el pokemon a buscar</label>
                <input
                    type="text"
                    id="nombrep"
                    name ="nombrep"
                    placeholder="Escribe Tu Nombre"
                    onChange={onChange}
                    value={nombrep}
                />
                 <button
                    onClick={onConsultar}
                >Consultar
        </button>
            </div>
            {resultado? 
                acciondatos
            :
             null
            }
        </form>
        </Fragment>
    );
}
 
export default Form;