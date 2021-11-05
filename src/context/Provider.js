import React, { useState } from 'react';
import AppContext from './AppContext';

function Provider({ children }) {
  const [meals, setMeals] = useState([]);
  const [drinks, setDrinks] = useState([]);

  const contextValue = {
    meals,
    setMeals,
    drinks,
    setDrinks,
  }

  return (
    <AppContext.Provider value={ contextValue } >
      { children }
    </AppContext.Provider>
  );
}

export default Provider;
