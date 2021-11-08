import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';

function Footer() {
  return (
    <footer data-testid="footer">
      <div data-testid="drinks-bottom-btn" src={ drinkIcon }>
        <Link to="/bebidas">
          <img src={ drinkIcon } alt="Icone de bebida" />
        </Link>
      </div>
      <div data-testid="explore-bottom-btn" src={ exploreIcon }>
        <Link to="/explorar">
          <img src={ exploreIcon } alt="Icone de explorar" />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
