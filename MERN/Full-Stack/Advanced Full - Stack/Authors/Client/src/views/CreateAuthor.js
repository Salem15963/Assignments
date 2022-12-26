import React, { useState } from 'react'
import axios from 'axios';
import AuthorForm from '../Components/AuthorForm';
import { Link } from 'react-router-dom';
    
const CreateAuthor = (props) => {
    const [authors, setAuthors] = useState();
    const [errors, setErrors] = useState([]); 

    

    const newAuthor = author => {
        axios.post('http://localhost:8000/api/authors', author)
            .then(res=>{
                setAuthors([...authors, res.data]);
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
            <Link to={'/'}>Dashboard</Link>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <AuthorForm onSubmitProp={newAuthor} initialName=""/>

        </div>
    )
};

    

export default CreateAuthor;

