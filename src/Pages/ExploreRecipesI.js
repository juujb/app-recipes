import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import IngrediensRecipesCards from '../Components/IngredientsRecipesCards';

export default function ExploreRecipesI() {
  return (
    <div>
      <Header title="Explorar Ingredientes" withSearch={ false } />
      <IngrediensRecipesCards />
      <Footer />
    </div>
  );
}
