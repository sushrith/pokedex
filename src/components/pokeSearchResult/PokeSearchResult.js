import React from 'react';
import './pokeSearchResult.css';
export const PokeSearchResult=(props)=>{
    
    return (
      
      <div className="poke-result-card">
          {
          
            props.showResult?
            
            <div>
            <img className="pokemon-animated-sprite" 
            alt="pokemon"
            src={props.sprite}
            />
            <p>Name: {props.name}</p>
            <p>Id: {props.id}</p>
            <p>Height: {props.height}</p>
            <p>Weight: {props.weight}</p>
            
            </div>
            
            
            
            :<p>Welcome to pokedex</p>    
          
          }
      </div>
      
    );
}