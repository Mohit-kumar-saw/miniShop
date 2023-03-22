import React from "react";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import "./style.scss";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} ></Route>
          <Route exact path="/cart" element={<Cart/>} ></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
