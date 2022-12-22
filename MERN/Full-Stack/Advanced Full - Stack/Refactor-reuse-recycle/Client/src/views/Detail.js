import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import DeleteButton from '../Components/DeleteButton';


const Detail = (props) => {
    const [product, setProduct] = useState({})
    const [loaded, setLoaded] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();
    
    useEffect (() =>{
        axios.get('http://localhost:8000/api/products/' +id)
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
                console.log("this is in the details");
            })
            .catch(err => console.error(err))
    }, [id]);

return (
    <div>

        <p>Title: {product.title}</p>
        <p>price: {product.price}</p>
        <p>Description: {product.description}</p>     
            <p>
                <Link to={"/products/" + product._id + "/edit"}>Edit|</Link>
                <DeleteButton productId={product._id} successCallback={() => navigate("/")} />
            </p>
            <p><Link to={'/'}>back</Link></p>
    </div>
    )
}

export default Detail;

