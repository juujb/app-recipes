import React from 'react';
import PropTypes from 'prop-types';

export default function Ingredients(props) {
  const { detail } = props;
  return (
    <div>
      { detail
        && (
          <div>
            <p data-testid="0-ingredient-name-and-measure">
              { `${detail.strIngredient1} - ${detail.strMeasure1}` }
            </p>
            <p data-testid="1-ingredient-name-and-measure">
              { `${detail.strIngredient2} - ${detail.strMeasure2}` }
            </p>
            <p data-testid="2-ingredient-name-and-measure">
              { `${detail.strIngredient3} - ${detail.strMeasure3}` }
            </p>
            <p data-testid="3-ingredient-name-and-measure">
              { `${detail.strIngredient4} - ${detail.strMeasure4}` }
            </p>
            <p data-testid="4-ingredient-name-and-measure">
              { `${detail.strIngredient5} - ${detail.strMeasure5}` }
            </p>
            <p data-testid="5-ingredient-name-and-measure">
              { `${detail.strIngredient6} - ${detail.strMeasure6}` }
            </p>
            <p data-testid="6-ingredient-name-and-measure">
              { `${detail.strIngredient7} - ${detail.strMeasure7}` }
            </p>
            <p data-testid="7-ingredient-name-and-measure">
              { `${detail.strIngredient8} - ${detail.strMeasure8}` }
            </p>
            <p data-testid="8-ingredient-name-and-measure">
              { `${detail.strIngredient9} - ${detail.strMeasure9}` }
            </p>
            <p data-testid="9-ingredient-name-and-measure">
              { `${detail.strIngredient10} - ${detail.strMeasure10}` }
            </p>
            <p data-testid="10-ingredient-name-and-measure">
              { `${detail.strIngredient11} - ${detail.strMeasure11}` }
            </p>
          </div>
        )}
    </div>
  );
}

Ingredients.propTypes = {
  detail: PropTypes.objectOf({
    strIngredients1: PropTypes.string,
  }).isRequired,
};
