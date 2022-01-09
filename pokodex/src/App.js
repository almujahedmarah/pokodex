import './App.css';
import {useEffect, useState} from 'react'
import axios from "axios"
import Pkomonethumnail from './comp/Pkomonethumnail';
function App() {
  const [pokemon, setPokemon] = useState([])
  const [lodemore, setLodemore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')

  const getAllpoko = async ()=>{
    const res = await fetch(lodemore)
    const data = await res.json()
    setLodemore(data.next)
    console.log(data);

//=============== for more detile =============================================================

    function createpoko(result){
      result.forEach( async (pokmon)=> {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokmon.name}`)
        const data = await res.json()
        setPokemon(currentList => [...currentList, data])
        // pokemon.push(data)
        // await console.log(pokemon);
      });

//============================================================================
    }
    createpoko(data.results)
    await console.log(pokemon);
  }

  useEffect(() => {
    getAllpoko()
  }, [])

  return (
    <div className="app-contaner">
      <h1>Pokemon Evolution</h1>
      <div className='pokemon-container'>
        <div className='all-container'>
          {pokemon.map((pokomon, index)=>
            <div>
            <Pkomonethumnail
            id={pokomon.id}
            name={pokomon.name}
            image={pokomon.sprites.other.dream_world.front_default}
            type={pokomon.types[0].type.name}
            key={index}
            />
            </div>
          )}
        </div>
        <button className='load-more' onClick={()=>getAllpoko()}>Lode more</button>
      </div>
    </div>
  );
}

export default App;
