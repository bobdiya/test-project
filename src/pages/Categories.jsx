import React, { useContext, useState } from 'react';
import { CarContext } from '../context/CarContext';
import { CartContext } from '../context/CartContext';

const Categories = () => {
  const { cars } = useContext(CarContext);
  const { dispatch } = useContext(CartContext);
  const [filter, setFilter] = useState("All");

  const filteredCars = filter === "All"
    ? cars
    : cars.filter((car) => car.category === filter);

  const addToCart = (car) => {
    dispatch({ type: 'ADD_TO_CART', payload: car });
  };

  return (
    <div>
      <h1>Car Categories</h1>
      <label htmlFor="categoryFilter">Filter by Category: </label>
      <select
        id="categoryFilter"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Electric">Electric</option>
        <option value="Sedan">Sedan</option>
        <option value="SUV">SUV</option>
      </select>

      <ul>
        {filteredCars.map((car) => (
          <li key={car.id}>
            <h3>{car.model}</h3>
            <p>Price: ${car.price}</p>
            <p>Category: {car.category}</p>
            <button onClick={() => addToCart(car)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
