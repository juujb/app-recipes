/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchRecipesDetails } from '../services/fetchDrinks';
import { fetchRecommendations } from '../services/fetchMeals';
import Ingredients from '../Components/Ingredients';

export default function DetailsRecipeDrink({ match: { params } }) {
  const [details, setDetails] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  async function fetch(id) {
    const detailsRecipes = await fetchRecipesDetails(id);
    setDetails(detailsRecipes);
    const recommendationsAll = await fetchRecommendations();
    setRecommendations(recommendationsAll);
  }

  useEffect(() => {
    fetch(params.id);
  }, []);

  return (
    <div>
      { details && (
        details.map((detail, index) => (
          <div key={ index }>
            <img
              src={ detail.strDrinkThumb }
              alt={ detail.strDrink }
              data-testid="recipe-photo"
            />
            <h2 data-testid="recipe-title">{ detail.strDrink }</h2>
            <button type="button" data-testid="share-btn">Compartilhar</button>
            <button type="button" data-testid="favorite-btn">Favoritar</button>
            <p>{ detail.strCategory }</p>
            <p data-testid="recipe-category">{ detail.strAlcoholic }</p>
            <Ingredients detail={ detail } index={ index } />
            <div data-testid="instructions">
              <p>{ detail.strInstructions}</p>
            </div>
            <div data-testid={ `${0}-recomendation-card` }>
              <p>Receitas Recomendads</p>
            </div>
            <button type="button" data-testid="start-recipe-btn">Iniciar Receita</button>
          </div>
        )))}
    </div>
  );
}

DetailsRecipeDrink.propTypes = {
  match: PropTypes.objectOf({
    params: PropTypes.object,
  }).isRequired,
};
