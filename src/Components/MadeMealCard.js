import React from 'react';
import PropTypes from 'prop-types';

export default function MadeMealCard({ meal, index, doneDate, history }) {
  function handleClick() {
    history.push(`/comidas/${ meal.id }`); 
  }

  return (
    <div>
      <span
        data-testid={`${index}-horizontal-top-text`}
      >
        { meal.category }
      </span>
      <img
        data-testid={ `${index}-horizontal-image` }
        onClick={ handleClick() }
        src={ meal.strMealThumb }
        />
      <span
        data-testid={ `${index}-horizontal-name` }
        onClick={ handleClick() }
      >
        {meal.strMeal}
      </span>
      <span
        data-testid={ `${index}-horizontal-done-date` }
      >
        { doneDate }
      </span>
      { tags.slice(0, 1).map((tagName, tagIndex) => (
        <span
          data-testid={ `${tagIndex}-${tagName}-horizontal-tag` }
        >
          { tagName }
        </span>
      ))}
    </div>
  );
}

MadeMealCard.propTypes = {
  meal: PropTypes.objectOf(PropTypes.any).isRequired,
  index: PropTypes.number.isRequired,
  doneDate: PropTypes.string.isRequired,
};
