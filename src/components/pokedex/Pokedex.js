import React from 'react';
import './pokedex.css';
import {PokeSearchResult} from '../pokeSearchResult/PokeSearchResult';
import { lazy, Suspense } from 'react';
import {Pokelist} from '../pokelist/Pokelist';
//const Pokelist = lazy(() => import('../pokelist/Pokelist'))
        
export const Pokedex=(props) => { 
    
    return (
    <div className="pokedex-container">

        <div className="pokelist-container">
        {/* <Suspense fallback={<p>Still Loading…</p>}> 
      </Suspense> */}
      <Pokelist click={props.click} handlePokeSearch={props.handlePokeSearch} pokemons={props.pokemons}/>
      
        </div>
        <div className="pokesearchresult-container">
        {   
            props.sp?
            <PokeSearchResult showResult={true} name={props.sp.name} sprite={JSON.parse(props.sp.sprites).animated}
            id={props.sp.id}
            height={props.sp.height}
            weight={props.sp.weight}
            />
            :<PokeSearchResult showResult={false}/>
            
            
        }

        
        
        
        </div>
        </div>
    );
}