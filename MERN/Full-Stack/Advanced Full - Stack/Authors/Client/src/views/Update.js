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
            .catch(err => console.error(err));
    }
    
    return (
        <div>
            <h1>Update a Author</h1>
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

