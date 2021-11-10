import React from 'react';
import PropTypes from 'prop-types';

function DrinksRecipesInProgress({ match: { params: { id } } }) {
  return (
    <div>
      <h1>Receitas de Bebidas em progresso</h1>
    </div>
  );
}

DrinksRecipesInProgress.propTypes = {
  match: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.func,
  ]).isRequired,
};

export default DrinksRecipesInProgress;
