import React from 'react';

function Product(props) {
  return (
    <div className="Product">
      <div>{props.product.name}</div>
      <img className="productShot" src={props.product.photoUrl} ></img>
    </div>
  );
}

export default Product;
