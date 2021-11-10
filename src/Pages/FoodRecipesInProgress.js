import React from 'react';
import PropTypes from 'prop-types';

function FoodRecipesInProgress({ match: { params: { id } } }) {
  return (
    <div>
      <h1>Receitas de comidas em progresso</h1>
    </div>
  );
}

FoodRecipesInProgress.propTypes = {
  match: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
    PropTypes.number,
    PropTypes.func,
  ]).isRequired,
};

export default FoodRecipesInProgress;
