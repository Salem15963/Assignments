import React, { useEffect, useState } from "react";
import axios from "axios";

  const Users = () => {
    const [people, setPeople] = useState([]);
    let [loaded, setLoaded] = useState(false);

    const getPokemon = ()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon')
        .then(response => setPeople(response.data.results), setLoaded(true))
        .catch((err) => {
            console.log(err.message);
        });
    }

  return (
    <ul className="list">
        <button onClick={getPokemon}type="submit">Fetch Pokemon</button>
        {loaded ? people.map((person, id)=>{
        return (<li key={id}>{person.name}</li>)
        }):null}    
    </ul>
  );
}

export default Users;