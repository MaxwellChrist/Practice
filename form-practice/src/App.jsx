import './App.css';
import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import Form from './component/Form';
import Order from './component/Order';

function App() {

  const [currentOrder, setCurrentOrder] = useState({})

  const orderSubmit = (order) => {
    console.log(`Your order is: `, order)
    setCurrentOrder(order)
  }

  return (
    <>
      <header>
        <h1>Max's Order Form</h1>
      </header>
      <nav>
        <Link to="/">Home</Link>
        <Link name="productA" to="/orderForm/A">Product A</Link>
        <Link name="productB" to="/orderForm/B">Product B</Link>
        <Link name="productC" to="/orderForm/C">Product C</Link>
        <Link name="productD" to="/orderForm/D">Product D</Link>
      </nav>
      <main>
        <Routes>
          <Route exact path="/" element={<h2>This is the home page</h2>} />

          <Route exact path="/orderForm/:product" element={<Form orderSubmit={orderSubmit} />} />

          <Route exact path="/order" element={<Order currentOrder={currentOrder} />} />
        </Routes>
      </main>
      <footer>
        copyright 2022
      </footer>
    </>
  );
}

export default App;
