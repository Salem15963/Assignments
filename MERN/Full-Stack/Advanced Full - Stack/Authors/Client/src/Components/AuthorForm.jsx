import React, { useState } from 'react'

    const AuthorForm = (props) => {

    const { initialName , onSubmitProp } = props;
    const [name, setName] = useState(initialName); 
    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({name});
        setName("");
    }

    return (
        
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Name</label><br />
                <input 
                    type="text" 
                    name="title" value={name} 
                    onChange={(e) => { setName(e.target.value) }} />
            </p>
            <input type="submit" />
        </form>
    )
}

export default AuthorForm;

