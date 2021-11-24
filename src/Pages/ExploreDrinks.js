import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import ExploreButtons from '../Components/ExploreButtons';
import '../styles/Explore.css';

export default function ExploreDrinks() {
  return (
    <div className="container-exploretype">
      <Header title="Explorar Bebidas" withSearch={ false } />
      <div className="main-explore">
        <ExploreButtons />
      </div>
      <Footer />
    </div>
  );
}
