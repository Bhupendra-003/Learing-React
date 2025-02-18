import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

function Product() {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const api = 'https://fakestoreapi.com/products';

        axios
            .get(api)
            .then(response => {
                console.log(response.data);
                setProduct(response.data);
            })
            .catch(err => {
                console.log("Error fetching products");
            });
    }, []); // Dependency array ensures the effect runs only once

    return (
        <div className='mt-8 w-full px-24 py-8 flex flex-wrap gap-5'>
            {product.map(item => (
                <Card key={item.id} product={item} /> // Rendering product titles
            ))}
        </div>
    );
}

export default Product;
