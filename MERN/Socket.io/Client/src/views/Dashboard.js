import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PlayerList from '../Components/PlayerList';
import io from 'socket.io-client';


import { Link } from 'react-router-dom';
    
const Dashboard = (props) => {
    const [players, setPlayers] = useState();
    const [loaded, setLoaded] = useState(false);
    const [socket] = useState(() => io(':8000'));

    useEffect(()=>{
        axios.get('http://localhost:8000/api/players')
            .then(res=>{
                setPlayers(res.data);
                setLoaded(true);
                console.log("this is in the main");
                socket.on('Welcome', data => console.log(data));
                return () => socket.disconnect(true);
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

