import React, { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const Users = () => {
    const [people, setPeople] = useState([]);
    let [loaded, setLoaded] = useState(false);

    const getLuke = ()=>{
        axios.get('https://swapi.dev/api/')
        .then(response => setPeople(response.data.results), setLoaded(true))
        .catch((err) => {
            console.log(err.message);
        });
    }

  return (
    <ul className="list">
        <button onClick={getLuke}type="submit">Fetch Pokemon</button>
        {loaded ? people.map((person, id)=>{
        return (<li key={id}>{person.name}</li>)
        }):null}    
    </ul>
  );
}

export default Users;
