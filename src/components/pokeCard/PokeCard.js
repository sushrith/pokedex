import React from 'react';
import './pokeCard.css';

export const PokeCard=(props)=>{

    return (

        <div className="pokecard" onClick={()=>props.click(props.name)}>
            <img className="pokemon-sprite" alt="pokemon" src={props.sprite}/>
            <p>{props.name}</p>
        </div>

      
        
    );

}