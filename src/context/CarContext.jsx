import React, { createContext, useState } from 'react';

const CarContext = createContext();

const CarProvider = ({ children }) => {
  const [cars] = useState([
    { id: 1, model: "Tesla Model 3", price: 40000, category: "Electric" },
    { id: 2, model: "Toyota Corolla", price: 20000, category: "Sedan" },
    { id: 3, model: "Ford Explorer", price: 35000, category: "SUV" },
    { id: 4, model: "Chevrolet Bolt", price: 36000, category: "Electric" },
  ]);
  return (
    <CarContext.Provider value={{ cars }}>
      {children}
    </CarContext.Provider>
  );
};

export { CarContext, CarProvider };
