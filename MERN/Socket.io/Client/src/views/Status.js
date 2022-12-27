import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PlayerStatus from '../Components/PlayerStatus';
import io from 'socket.io-client';


import { Link } from 'react-router-dom';
    
const Status = (props) => {
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

    const updateStatus = (id, status) => {
        axios.put('http://localhost:8000/api/players/' + id, {status:status})
            .then(res => 
                setPlayers([...players, players.status.res.data]),
                )
            .catch(err => console.error(err))
    }
    
    const removeFromDom = playerId => {
        setPlayers(players.filter(player => player._id !== playerId));
    }


    return (
        <>
        <div>
            <Link to="/">Player List</Link>
            <hr></hr>
            {loaded && <PlayerStatus players={players}  updateStatus={updateStatus} removeFromDom={removeFromDom}/>}
        </div>
        </>
    )
};

    

export default Status;

