import React, { useState } from 'react'

    const PlayerForm = (props) => {

    const { initialPlayerName ,initialPreferredPosition,initialStatus, onSubmitProp } = props;
    const [playerName, setPlayerName] = useState(initialPlayerName); 
    const [preferredPosition, setPreferredPosition] = useState(initialPreferredPosition); 
    const [status, setStatus] = useState(initialStatus); 
    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({playerName, preferredPosition, status });
        setPlayerName("");
        setPreferredPosition("");
    }

    return (
        
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Player Name</label><br />
                <input 
                    type="text" 
                    name="title" value={playerName} 
                    onChange={(e) => { setPlayerName(e.target.value) }} />
            </p>

            <p>
                <label>Preferred Position</label><br />
                <input 
                    type="text" 
                    name="title" value={preferredPosition} 
                    onChange={(e) => { setPreferredPosition(e.target.value) }} />
            </p>
            <input type="submit" />
        </form>
    )
}

export default PlayerForm;

