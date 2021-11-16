import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import ExploreButtons from '../Components/ExploreButtons';

export default function ExploreDrinks() {
  return (
    <div>
      <Header title="Explorar Bebidas" withSearch={ false } />
      <ExploreButtons />
      <Footer />
    </div>
  );
}
