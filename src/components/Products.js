import React from 'react';
import Product from './Product.js';

const products = [
    {
        id: 1,
        name: 'Logo Navy Tee',
        price: 25,
        photoUrl: 'https://i.imgur.com/BgJ699T.png'
    },
    {
        id: 2,
        name: 'UV LS Shirt',
        price: 45,
        photoUrl: 'https://i.imgur.com/EjFmJjq.png'
    },
    {
        id: 3,
        name: 'Popper Sand Tee',
        price: 25,
        photoUrl: 'https://i.imgur.com/iMhUB1u.png'
    },
    {
        id: 4,
        name: 'FlexFit Hat',
        price: 29.50,
        photoUrl: 'https://i.imgur.com/dcq65aC.png'
    },
    {
        id: 5,
        name: 'Waterproof Sticker',
        price: 5,
        photoUrl: 'https://i.imgur.com/0D2987D.png'
    },
]

function Products() {
  return (
    <div className="Products">
        {products.map((product) => {
            return <Product key={product.id} product={product} />
        })}
    </div>
  );
}

export default Products;
