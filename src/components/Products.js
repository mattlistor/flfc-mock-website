import React from 'react';
import Product from './Product.js';

const products = [
    {
        id: 1,
        name: 'Logo Navy Tee',
        price: 25,
        photoUrl: 'url goes here'
    },
    {
        id: 2,
        name: 'UV LS Shirt',
        price: 45,
        photoUrl: 'url goes here'
    },
    {
        id: 3,
        name: 'Popper Sand Tee',
        price: 25,
        photoUrl: 'url goes here'
    },
    {
        id: 4,
        name: 'FlexFit Hat',
        price: 29.50,
        photoUrl: 'url goes here'
    },
    {
        id: 5,
        name: 'Waterproof Sticker',
        price: 5,
        photoUrl: 'url goes here'
    },
]

function Products() {
  return (
    <>
        {products.map((product) => {
            return <Product key={product.id} product={product} />
        })}
    </>
  );
}

export default Products;
