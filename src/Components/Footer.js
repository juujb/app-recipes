import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';

function Footer() {
  return (
    <footer data-testid="footer">
      <div data-testid="drinks-bottom-btn" src={ drinkIcon }>
        <Link to="/bebidas">
          <img src={ drinkIcon } alt="Simbolo de bebida" />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
