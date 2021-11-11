import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import ExploreButtons from '../Components/ExploreButtons';

export default function ExploreRecipes() {
  return (
    <div>
      <Header title="Explorar Comidas" withSearch={ false } />
      <ExploreButtons />
      <Footer />
    </div>
  );
}
