import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import ExploreButtons from '../Components/ExploreButtons';
import '../styles/Explore.css';

export default function ExploreRecipes() {
  return (
    <div div className="container-exploretype">
      <Header title="Explorar Comidas" withSearch={ false } />
      <div className="main-explore">
        <ExploreButtons />
      </div>
      <Footer />
    </div>
  );
}
