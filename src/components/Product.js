import React from 'react';

function Product(product) {
    console.log(typeof product)
  return (
    <div>{product.product.name}</div>
  );
}

export default Product;
