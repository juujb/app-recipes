import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import '../styles/Explore.css';

// Referencia do uso do useHistory: https://dev.to/ino_gu/utilizando-usehistory-no-react-bgf
export default function Explore() {
  const history = useHistory();

  const handleClick = ({ target: { name } }) => history.push(`/explorar/${name}`);

  return (
    <div className="container-exploretype">
      <Header title="Explorar" withSearch={ false } />
      <div className="main-explore">
        <div>
          <Button
            variant="primary"
            type="button"
            name="comidas"
            data-testid="explore-food"
            onClick={ handleClick }
          >
            Explorar Comidas
          </Button>
        </div>
        <div>
          <Button
            variant="primary"
            type="button"
            name="bebidas"
            data-testid="explore-drinks"
            onClick={ handleClick }
          >
            Explorar Bebidas
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
