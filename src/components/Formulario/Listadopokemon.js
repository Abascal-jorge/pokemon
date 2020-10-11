import React, {Fragment} from 'react';

const Listadopokemon = (resultado) => {
    //console.log(resultado.resultado.abilities[0]);

    return ( 
        <Fragment>
            <div>
                <h1>{resultado.resultado.forms[0].name}</h1>
                <img src={`${resultado.resultado.sprites.other.dream_world.front_default}`} alt="Girl in a jacket" />
                <h2>Habilidades</h2>
                <ul>
                    {
                        resultado.resultado.abilities.map(habilida => (
                            //<li>{habilida.ability}</li>
                            <li
                               key = {habilida.ability.name}
                            >
                                {habilida.ability.name}
                            </li>
                        ))  
                    }
                </ul>
            </div>
        </Fragment>
    );
}
 
export default Listadopokemon;