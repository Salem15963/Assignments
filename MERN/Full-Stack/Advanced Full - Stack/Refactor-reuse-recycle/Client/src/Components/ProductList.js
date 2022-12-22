import axios from 'axios';
import { Link } from 'react-router-dom';
import DeleteButton from '../Components/DeleteButton';
import React, { useEffect } from 'react'

const ProductList = (props) => {
    const { removeFromDom , products} = props;
    
    
    return (
        <div>
            {products.map((product, idx) => {
                return (
                    <p key={idx} className = "btn">
                        <Link to={"/products/" + product._id}>
                            {product.title} 
                        </Link>
                        |
                        <DeleteButton productId={product._id} successCallback={()=>removeFromDom(product._id)}/>
                    </p>
                )
            })}
        </div>
    );
}
    
export default ProductList;

