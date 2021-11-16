import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ButtonShare from './ButtonShare';

export default function MadeMealCard({ meal, index }) {
  return (
    <div>
      <Link to={ `comidas/${meal.id}` }>
        <img
          data-testid={ `${index}-horizontal-image` }
          style={ { width: '150px' } }
          alt={ meal.name }
          src={ meal.image }
        />
        <h1 data-testid={ `${index}-horizontal-name` }>{meal.name}</h1>
      </Link>
      <h3
        data-testid={ `${index}-horizontal-top-text` }
      >
        { `${meal.area} - ${meal.category}`}
      </h3>
      <span
        data-testid={ `${index}-horizontal-done-date` }
      >
        {meal.doneDate}
      </span>
      <ButtonShare link={ `http://localhost:3000/comidas/${meal.id}` } testId={ `${index}-horizontal-share-btn` } />
      {meal.tags.map((tagName) => (
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

MadeMealCard.propTypes = {
  meal: PropTypes.objectOf(PropTypes.any).isRequired,
  index: PropTypes.number.isRequired,
};
