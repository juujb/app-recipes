import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import IngrediensDrinkCards from '../Components/IngredientsDrinksCards';

export default function ExploreDrinksI() {
  return (
    <div>
      <Header title="Explorar Ingredientes" withSearch={ false } />
      <IngrediensDrinkCards />
      <Footer />
    </div>
  );
}
