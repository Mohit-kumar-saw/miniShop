import React, { useState, useEffect } from "react";
import SearchResultsPage from "../Components/SearchResultsPage";
import CheckoutPage from "../Components/CheckoutPage";
import Navbar from "../Components/Navbar";

function Home() {
  const [category, setCategory] = useState("all");
  const [cart, setCart] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [total, setTotal] = useState(0);

  // Fetch products based on the selected category
  useEffect(() => {
    fetch(
      `https://uxdlyqjm9i.execute-api.eu-west-1.amazonaws.com/s?category=${category}`
    )
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, [category]);

  // Add product to cart
  function addToCart(product) {
    const newCart = [...cart];
    const index = newCart.findIndex((item) => item.id === product.id);
    if (index !== -1) {
      newCart[index].quantity++;
    } else {
      newCart.push({ ...product, quantity: 1 });
    }
    setCart(newCart);
    
  }

  // Remove product from cart
  function removeFromCart(product) {
    const newCart = [...cart];
    const index = newCart.findIndex((item) => item.id === product.id);
    if (index !== -1) {
      newCart[index].quantity--;
      if (newCart[index].quantity === 0) {
        newCart.splice(index, 1);
      }
      setCart(newCart);
    }
  }

  // Calculate cart subtotal
  useEffect(() => {
    let sum = 0;
    cart.forEach((item) => {
      sum += item.price * item.quantity;
    });
    setSubtotal(sum);
  }, [cart]);

  // Calculate discounts and total
  useEffect(() => {
    let discountAmount = 0;
    let cokeCount = 0;
    let croissantCount = 0;
    cart.forEach((item) => {
      if (item.name === "Coca-Cola") {
        cokeCount += item.quantity;
      } else if (item.name === "Croissant") {
        croissantCount += item.quantity;
      }
    });
    if (cokeCount >= 6) {
      discountAmount += Math.floor(cokeCount / 6) * 1.5;
    }
    if (croissantCount >= 3) {
      discountAmount += 2.5;
    }
    setDiscount(discountAmount);
    setTotal(subtotal - discountAmount);
  }, [cart, subtotal]);

  return (
    <div>
      <Navbar />

      <div className="select">
        <label htmlFor="category-select">Category : </label>
        <select
          id="category-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">All</option>
          <option value="fruit">Fruit</option>
          <option value="drinks">Drinks</option>
          <option value="bakery">Bakery</option>
        </select>
      </div>
      <div>
        <SearchResultsPage
          category={category}
          addToCart={addToCart}
          discount={discount}
          subtotal={subtotal}
        />
        <CheckoutPage
          cart={cart}
          removeFromCart={removeFromCart}
          subtotal={subtotal}
          discount={discount}
          total={total}
        />
      </div>
    </div>
  );
}

export default Home;
