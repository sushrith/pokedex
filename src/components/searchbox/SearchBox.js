import React from 'react';
import './searchbox.css';
export const SearchBox=(props)=>{
    return (
    <input className="search" type="search"
    placeholder="Search" onChange={e=>{
        props.handlePokeSearch(e.target.value);
    }}/>
    
    );
}