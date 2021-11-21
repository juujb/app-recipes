import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

function Footer() {
  return (
    <footer data-testid="footer" className="footer">
      <div data-testid="drinks-bottom-btn" src={ drinkIcon }>
        <Link to="/bebidas">
          <img src={ drinkIcon } alt="Icone de bebida" className="icone-drinks" />
        </Link>
      </div>
      <div data-testid="explore-bottom-btn" src={ exploreIcon }>
        <Link to="/explorar">
          <img src={ exploreIcon } alt="Icone de explorar" className="icone-explorar" />
        </Link>
      </div>
      <div data-testid="food-bottom-btn" src={ mealIcon }>
        <Link to="/comidas">
          <img src={ mealIcon } alt="Icone de comida" className="icone-meal" />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
