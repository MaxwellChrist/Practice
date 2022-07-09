import './App.css';
import React from 'react';
import {Routes, Route, Link} from 'react-router-dom'
import Form from './component/Form';

function App() {
  return (
    <>
      <header>
        <h1>Max's Order Form</h1>
      </header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/orderForm/A">Product A</Link>
        <Link to="/orderForm/B">Product B</Link>
        <Link to="/orderForm/C">Product C</Link>
        <Link to="/orderForm/D">Product D</Link>
      </nav>
      <main>
        <Routes>
          <Route exact path="/" element={<h2>This is the home page</h2>} />

          <Route exact path="/orderForm/:model" element={<Form />} />

          <Route exact path="/contact" />
        </Routes>
      </main>
      <footer>
        copyright 2022
      </footer>
    </>
  );
}

export default App;
