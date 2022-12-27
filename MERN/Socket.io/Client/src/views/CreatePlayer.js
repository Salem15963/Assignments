import React, { useState } from 'react'
import axios from 'axios';
import PlayerForm from '../Components/PlayerForm';
import { Link } from 'react-router-dom';

const CreatePlayer = (props) => {
    const [players, setPlayers] = useState();
    const [errors, setErrors] = useState([]); 

    

    const newPlayer = player => {
        axios.post('http://localhost:8000/api/players', player)
            .then(res=>{
                setPlayers([...players, res.data]);
            })
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
            <div className='link'>
                <Link to="/PlayerStatus">Player Status</Link>
                <br></br>
                <Link to={'/'}>Player List</Link>
            </div>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <PlayerForm onSubmitProp={newPlayer} initialPlayerName="" initialPreferredPosition="" initialStatus="undecided"/>

        </div>
    )
};

    

export default CreatePlayer;

