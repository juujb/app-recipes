import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ButtonShare from './ButtonShare';

export default function MadeDrinkCard({ drink, index }) {
  return (
    <div>
      <Link to={ `bebidas/${drink.id}` }>
        <img
          style={ { width: '150px' } }
          data-testid={ `${index}-horizontal-image` }
          alt={ drink.name }
          src={ drink.image }
        />
        <h1 data-testid={ `${index}-horizontal-name` }>{drink.name}</h1>
      </Link>
      <h3
        data-testid={ `${index}-horizontal-top-text` }
      >
        { `${drink.area} - ${drink.category}`}
      </h3>
      <span
        data-testid={ `${index}-horizontal-top-text` }
      >
        {drink.alcoholicOrNot}
      </span>
      <span
        data-testid={ `${index}-horizontal-done-date` }
      >
        {drink.doneDate}
      </span>
      <ButtonShare link={ `http://localhost:3000/bebidas/${drink.id}` } testId={ `${index}-horizontal-share-btn` } />
      {drink.tags.map((tagName) => (
        <span
          data-testid={ `${index}-${tagName}-horizontal-tag` }
          key={ tagName }
        >
          {tagName}
        </span>
      ))}
    </div>
  );
}

MadeDrinkCard.propTypes = {
  drink: PropTypes.objectOf(PropTypes.any).isRequired,
  index: PropTypes.number.isRequired,
};
