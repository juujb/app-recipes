import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

export default function Profile() {
  return (
    <div>
      <Header title="Perfil" withSearch={ false } />
      <Footer />
    </div>
  );
}
