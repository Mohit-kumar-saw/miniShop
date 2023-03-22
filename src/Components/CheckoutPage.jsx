import React from 'react';


function CheckoutPage({ cart, removeFromCart, subtotal, discount, total }) {
  return (
    <div className='addToCart'>
      <h2>Checkout</h2>
      <div className='main'>
        {cart.map(item => (
          <div className='cartCard' key={item.id}>
            {item.name} - {item.price}
            <div className="quantity">
              <span className='plus'>+</span><span></span>1<span className='minus'>-</span>
            </div>
            <button onClick={() => removeFromCart(item)}><i class="material-icons">cancel</i></button>
          </div>
        ))}
      </div>
      <p>Subtotal: {subtotal}</p>
      <p>Discount: {discount}</p>
      <p>Total: {total}</p>
    </div>
  );
}

export default CheckoutPage;
