import React, { useContext, useState } from 'react';
import { CarContext } from '../context/CarContext';

const Categories = () => {
  const { cars } = useContext(CarContext);
  const [filter, setFilter] = useState("All");

  const filteredCars = filter === "All"
    ? cars
    : cars.filter((car) => car.category === filter);

  return (
    <div>
      <h1>Car Categories</h1>

      {/* Filter Dropdown */}
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

      {/* Display Cars */}
      <ul>
        {filteredCars.map((car) => (
          <li key={car.id}>
            <h3>{car.model}</h3>
            <p>Price: ${car.price}</p>
            <p>Category: {car.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
