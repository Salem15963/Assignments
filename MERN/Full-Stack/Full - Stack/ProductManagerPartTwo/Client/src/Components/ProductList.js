import React from 'react'
// import axios from 'axios';
import { Link } from 'react-router-dom';
    
const ProductList = (props) => {

    return (
        <div>
            {props.products.map( (product, i) =>
                <p>
                    <Link key={product._id} to={`/products/${product._id}`}>{product.title}</Link>
                </p>
            )}
        </div>
    )
}
    
export default ProductList;

    