import './App.css';
import {pokemonData} from './../data/pokemonData';
import React,{Component} from 'react';
import {Pokedex} from './pokedex/Pokedex';



class App extends Component{
  constructor(){
    super();
    this.state={
      searchField:'',
      pokemons:[],
      selectedPokemon:null
    }
  }

  componentDidMount(){

    this.setState({
      pokemons:pokemonData,
    });

  }

  handleClick=(name)=>{
    //alert(name);
    const {pokemons}=this.state;
    let sp=pokemons.find(pokemon=>pokemon.name===name)
    this.setState({
      selectedPokemon:sp
    });
  }

  handlePokeSearch=(searchValue)=>{
    this.setState({
      searchField:searchValue
    });
  
  }

  render(){
    
    const {pokemons,searchField}=this.state;
    let searchPokemons=pokemons.filter(pokemon=>{
      return pokemon.name?pokemon.name.toLowerCase().includes(searchField.toLowerCase()):false;
    });

    return( 
    <div className="App">
     <h1>Pokedex</h1> 
     <Pokedex sp={this.state.selectedPokemon} handlePokeSearch={this.handlePokeSearch} pokemons={searchPokemons} click={this.handleClick}/>
     
     
      </div>
    )
  }
}
export default App;
