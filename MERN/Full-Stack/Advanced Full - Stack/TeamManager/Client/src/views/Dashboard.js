import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PlayerList from '../Components/PlayerList';


import { Link } from 'react-router-dom';
    
const Dashboard = (props) => {
    const [players, setPlayers] = useState();
    const [loaded, setLoaded] = useState(false);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/players')
            .then(res=>{
                setPlayers(res.data);
                setLoaded(true);
                console.log("this is in the main");
            })
            .catch(err => console.error(err));
    },[]);
    
    const removeFromDom = playerId => {
        setPlayers(players.filter(player => player._id !== playerId));
    }


    return (
        <>
        <div>
            <div  className='links'>
            <Link to="/createPlayer">Create Player</Link>
            <Link to="/PlayerStatus">Player Status</Link>
        </div>
            <hr></hr>
            {loaded && <PlayerList players={players} removeFromDom={removeFromDom}/>}
        </div>
        </>
    )
};

    

export default Dashboard;

