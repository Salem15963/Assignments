import React, { useEffect, useState } from 'react'
import axios from 'axios';
import AuthorList from '../Components/AuthorList';


import { Link } from 'react-router-dom';
    
const Dashboard = (props) => {
    const [authors, setAuthors] = useState();
    const [loaded, setLoaded] = useState(false);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/authors')
            .then(res=>{
                setAuthors(res.data);
                setLoaded(true);
                console.log("this is in the main");
            })
            .catch(err => console.error(err));
    },[]);
    
    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id !== authorId));
    }


    return (
        <>
        <div>
            <Link to="/createAuthor">Create Author</Link>
            <hr></hr>
            {loaded && <AuthorList authors={authors} removeFromDom={removeFromDom}/>}
        </div>
        </>
    )
};

    

export default Dashboard;

