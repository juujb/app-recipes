import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

// Referencia do uso do useHistory: https://dev.to/ino_gu/utilizando-usehistory-no-react-bgf
export default function Explore() {
  const history = useHistory();

  const handleClick = ({ target: { name } }) => history.push(`/explorar/${name}`);

  return (
    <div>
      <Header title="Explorar" withSearch={ false } />
      <button
        type="button"
        name="comidas"
        data-testid="explore-food"
        onClick={ handleClick }
      >
        Explorar Comidas
      </button>
      <button
        type="button"
        name="bebidas"
        data-testid="explore-drinks"
        onClick={ handleClick }
      >
        Explorar Bebidas
      </button>
      <Footer />
    </div>
  );
}
