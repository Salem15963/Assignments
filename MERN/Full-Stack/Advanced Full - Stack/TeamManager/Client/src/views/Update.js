import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PlayerForm from '../Components/PlayerForm';
import { useParams, useNavigate } from 'react-router-dom';
import DeleteButton from '../Components/DeleteButton';
import { Link } from 'react-router-dom';

    
const Update = (props) => {

    const navigate = useNavigate()
    const { id } = useParams();
    const [player, setPlayer] = useState();
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]); 

    useEffect(() => {
        axios.get('http://localhost:8000/api/players/' + id)
            .then(res => {
                setPlayer(res.data);
                setLoaded(true);
                console.log("this is in the update component")
            })
    }, [id]);
    
    const updatePlayer = player => {
        axios.put('http://localhost:8000/api/players/' + id, player)
            .then(res => console.log(res), navigate("/players/" + id))
            .catch(err=>{
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })  
    }
    
    return (
        <div>
            <h1>Update a Player</h1>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            {loaded && (
                <>
                    <PlayerForm
                        onSubmitProp={updatePlayer}
                        initialPlayerName={player.playerName}
                        initialPreferredPosition={player.preferredPosition}
                    />
                    <p>
                        <DeleteButton playerId={player._id} successCallback={() => navigate("/")} />
                        <Link to={'/'}>Back</Link>
                    </p>
                </>
            )}
        </div>
    )
}
    
export default Update;

