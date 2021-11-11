/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import PropTypes from 'prop-types';

export default function Ingredients(props) {
  const { detail: { ingredients, measures } } = props;

  return (
    <div>
      {
        ingredients.map((ingredient, index) => (
          ingredient
            && (
              <p key={ index } data-testid={ `${index}-ingredient-name-and-measure` }>
                { `${ingredient} - ${measures[index]}` }
              </p>
            )
        ))
      }
    </div>
  );
}

Ingredients.propTypes = {
  detail: PropTypes.objectOf(PropTypes.any).isRequired,
};
