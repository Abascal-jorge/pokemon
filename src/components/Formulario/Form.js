import React, { useContext, useState } from 'react';
import Listadopokemon from "./Listadopokemon";
import pokemonContext from "../../context/pokemonContext";

const Form = () => {

    const PokemonContext = useContext(pokemonContext);
    const {obtenerNombre} = PokemonContext;

    //Crewando state para guatrdar el nombre del pokemon
    const [pokemon, guardarpokemon] = useState({
        nombrep : ""
    });
    const {nombrep} = pokemon;

    //Funcion text box guardar nombre 
    const onChange = (e) => {
        console.log(e.target.value);
            guardarpokemon({
            ...pokemon,
            [e.target.name] : e.target.value
        });   
    }

    //funcion boton
    const onConsultar  = (e) =>{
        e.preventDefault();
        //Validar Formulario
        if(nombrep === ""){
            return;
        }
        obtenerNombre(pokemon);
    }

    return ( 
        <form>
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
                >Consultar</button>
            </div>
            
            <Listadopokemon/>
        </form>
    );
}
 
export default Form;