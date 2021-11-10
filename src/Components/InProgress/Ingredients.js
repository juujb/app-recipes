import React from 'react';
import PropTypes from 'prop-types';

export default function Ingredients({ ingredients, medidas }) {
  return (
    <div>
      <h1>Ingredientes</h1>
      <ul>
        {ingredients && ingredients
          .map((ingrediente, index) => (
            <li data-testid={ `${index}-ingredient-step` } key={ ingrediente }>
              {ingrediente}
              <span>
                {' '}
                -
                {' '}
                { medidas[index] }
              </span>
            </li>
          ))}
      </ul>
    </div>
  );
}

Ingredients.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.array).isRequired,
  medidas: PropTypes.arrayOf(PropTypes.array).isRequired,
};
