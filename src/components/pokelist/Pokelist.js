import React from 'react';
import { PokeCard } from '../pokeCard/PokeCard';
import { SearchBox } from '../searchbox/SearchBox';
import './pokelist.css';
export const Pokelist=(props)=>{
 
    return(
        <div className="pokelist">
        <SearchBox  handlePokeSearch={props.handlePokeSearch}/>           
            {
                props.pokemons.map((pokemon)=>{
                    let sprite=null;
                    try {
                        sprite=JSON.parse(pokemon.sprites);
                        sprite=sprite.normal;
                    } catch (error) {
                        
                    }
                    return pokemon.name?<PokeCard click={props.click} key={pokemon.id} id={pokemon.id} name={pokemon.name} sprite={sprite}/>:null

                })

            }



            
        </div>
    )

}