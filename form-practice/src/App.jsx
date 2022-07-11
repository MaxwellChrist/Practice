import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Form from './component/Form';
import Order from './component/Order';

function App() {

  const [currentOrder, setCurrentOrder] = useState({})
  const [jokes, setJokes] = useState({})

  const orderSubmit = (order) => {
    console.log(`Your order is: `, order)
    setCurrentOrder(order)
  }
  
  const addJokes = () => {
    let jokesNumber = document.querySelectorAll('.joke')
    jokesNumber = Array.from(jokesNumber)
    let arr = []

    for (let i = 0; i < jokesNumber.length; i++) {
      axios.get('https://api.chucknorris.io/jokes/random')
      .then((res) => {
        arr.push(res.data.value)
      })
    }
    setJokes(arr)
  }

  useEffect(() => {
    addJokes()
  },[])

  return (
    <>
      <header>
        <h1>Chuck Norris Jokes Order Form</h1>
      </header>
      <nav>
        <Link to="/">Home</Link>
        <Link className="joke" name="joke1" to="/orderForm/1">Joke 1</Link>
        <Link className="joke" name="joke2" to="/orderForm/2">Joke 2</Link>
        <Link className="joke" name="joke3" to="/orderForm/3">Joke 3</Link>
        <Link className="joke" name="joke4" to="/orderForm/4">Joke 4</Link>
      </nav>
      <main>
        <Routes>
          <Route exact path="/" element={<h2>This is the home page</h2>} />
          <Route exact path="/orderForm/:product" element={<Form orderSubmit={orderSubmit} jokes={jokes} />} />
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
