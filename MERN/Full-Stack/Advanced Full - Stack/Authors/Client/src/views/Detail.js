import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import DeleteButton from '../Components/DeleteButton';


const Detail = (props) => {
    const [author, setAuthor] = useState({})
    const [loaded, setLoaded] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();
    
    useEffect (() =>{
        axios.get('http://localhost:8000/api/authors/' +id)
            .then(res => {
                setAuthor(res.data);
                setLoaded(true);
                console.log("this is in the details");
            })
            .catch(err => console.error(err))
    }, [id]);

return (
    <div>
{loaded && 
        <p>Name: {author.name}</p>    
}
            <p>
                <Link to={"/authors/" + author._id + "/edit"}>Edit|</Link>
                <DeleteButton authorId={author._id} successCallback={() => navigate("/")} />
            </p>
            <p><Link to={'/'}>back</Link></p>
    </div>
    )
}

export default Detail;

