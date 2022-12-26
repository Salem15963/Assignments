import React, { useState } from 'react'
import axios from 'axios';
import AuthorForm from '../Components/AuthorForm';
import { Link } from 'react-router-dom';
    
const CreateAuthor = (props) => {
    const [authors, setAuthors] = useState();
    
    

    const newAuthor = author => {
        axios.post('http://localhost:8000/api/authors', author)
            .then(res=>{
                setAuthors([...authors, res.data]);
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            <Link to={'/'}>Dashboard</Link>
            <AuthorForm onSubmitProp={newAuthor} initialName=""/>
        </div>
    )
};

    

export default CreateAuthor;

