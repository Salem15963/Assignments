import React, { useEffect, useState } from 'react'
import axios from 'axios';
import AuthorForm from '../Components/AuthorForm';
import { useParams, useNavigate } from 'react-router-dom';
import DeleteButton from '../Components/DeleteButton';
import { Link } from 'react-router-dom';

    
const Update = (props) => {

    const navigate = useNavigate()
    const { id } = useParams();
    const [author, setAuthor] = useState();
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]); 

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => {
                setAuthor(res.data);
                setLoaded(true);
                console.log("this is in the update component")
            })
    }, [id]);
    
    const updateAuthor = author => {
        axios.put('http://localhost:8000/api/authors/' + id, author)
            .then(res => console.log(res), navigate("/authors/" + id))
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
            <h1>Update a Author</h1>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            {loaded && (
                <>
                    <AuthorForm
                        onSubmitProp={updateAuthor}
                        initialName={author.name}
                    />
                    <p>
                        <DeleteButton authorId={author._id} successCallback={() => navigate("/")} />
                        <Link to={'/'}>Dashboard</Link>
                    </p>
                </>
            )}
        </div>
    )
}
    
export default Update;

