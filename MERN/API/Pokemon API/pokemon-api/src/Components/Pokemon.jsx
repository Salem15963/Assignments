import { useEffect , useState} from "react"
import React from "react";

const Pokemons = () => {

        const [people, setPeople] = useState([]);
        const handlePokemon = (() => {
            fetch ('https://pokeapi.co/api/v2/pokemon')
                .then(response => response.json())
                .then(response => setPeople(response.results))
        })
    
        return (
            
            <ul className="list">
                <button onClick={()=>handlePokemon()}>Fetch Pokemon</button>
                {people ? people.map((person, id)=>{
                return (<li key={id}>{person.name}</li>)
                }):null}    
            </ul>
        );
}

export default Pokemons