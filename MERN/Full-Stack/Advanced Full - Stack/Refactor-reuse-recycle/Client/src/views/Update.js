import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductForm from '../Components/ProductForm';
import { useParams, useNavigate } from 'react-router-dom';
import DeleteButton from '../Components/DeleteButton';
import { Link } from 'react-router-dom';

    
const Update = (props) => {

    const navigate = useNavigate()
    const { id } = useParams();
    const [product, setProduct] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
                console.log("this is in the update component")
            })
    }, [id]);
    
    const updateProduct = product => {
        axios.put('http://localhost:8000/api/products/' + id, product)
            .then(res => console.log(res), navigate("/products/" + id))
            .catch(err => console.error(err));
    }
    
    return (
        <div>
            <h1>Update a Product</h1>
            {loaded && (
                <>
                    <ProductForm
                        onSubmitProp={updateProduct}
                        initialTitle={product.title}
                        initialPrice={product.price}
                        initialDescription={product.description}
                    />
                    <p>
                        <DeleteButton productId={product._id} successCallback={() => navigate("/")} />
                        <Link to={'/'}>back</Link>
                    </p>
                </>
            )}
        </div>
    )
}
    
export default Update;

