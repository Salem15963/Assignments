import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import DeleteButton from '../Components/DeleteButton';
import io from 'socket.io-client';


const Detail = (props) => {
    const [player, setPlayer] = useState({})
    const [loaded, setLoaded] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();
    const [socket] = useState(() => io(':8000'));

    useEffect (() =>{
        axios.get('http://localhost:8000/api/players/' +id)
            .then(res => {
                setPlayer(res.data);
                setLoaded(true);
                console.log("this is in the details");
                socket.on('Welcome', data => console.log(data));
                return () => socket.disconnect(true);
            })
            .catch(err => console.error(err))
    }, [id]);

return (
    <div>
{loaded && 
        <>
        <p>Player Name: {player.playerName}</p>
        <p> Position Name: {player.preferredPosition}</p>
        <p> Activity: {player.status}</p>
            </>    
}
            <p>
                <Link to={"/players/" + player._id + "/edit"}>Edit|</Link>
                <DeleteButton playerId={player._id} successCallback={() => navigate("/")} />
            </p>
            <p><Link to={'/'}>back</Link></p>
    </div>
    )
}

export default Detail;

