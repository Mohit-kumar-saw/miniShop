import React, { useState, useEffect } from 'react';

function SearchResultsPage({ category, addToCart }) {
  const [products, setProducts] = useState([]);

  // Fetch products based on the selected category
  useEffect(() => {
    fetch(`https://uxdlyqjm9i.execute-api.eu-west-1.amazonaws.com/s?category=${category}`)
      .then(response => response.json())
      .then(data => setProducts(data));
  }, [category]);

  return (
    <div>
      <h2 className='searchHeading'>Search Results for {category}</h2>
      <div className='main'>
        {products.map(product => (
          
          <div className='card' key={product.id}>
            <img src={product.img} alt="" width={200}/>
           <div className='info'> {product.name} - {product.available >= 10 ? "Available" : product.available} available
            <div className="buttons">
            <button className='heartButton'><i className="fa fa-heart"></i></button>
            <button className='cartButton' onClick={() => addToCart(product)}><i className=" fa fa-shopping-cart"></i></button></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchResultsPage;
