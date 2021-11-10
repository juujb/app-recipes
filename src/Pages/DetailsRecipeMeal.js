/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchRecipesDetails } from '../services/fetchMeals';
import { fetchRecommendations } from '../services/fetchDrinks';
import Ingredients from '../Components/Ingredients';

export default function DetailsRecipeMeal({ match: { params } }) {
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
              src={ detail.strMealThumb }
              alt={ detail.strMeal }
              data-testid="recipe-photo"
            />
            <h2 data-testid="recipe-title">{ detail.strMeal }</h2>
            <button type="button" data-testid="share-btn">Compartilhar</button>
            <button type="button" data-testid="favorite-btn">Favoritar</button>
            <p data-testid="recipe-category">{ detail.strCategory }</p>
            <Ingredients detail={ detail } />
            <div data-testid="instructions">
              <p>{ detail.strInstructions}</p>
            </div>
            <div data-testid="video">
              <a href={ detail.strYoutube }>YouTube</a>
            </div>
            <div data-testid={ `${0}-recomendation-card` }>
              <p>Receitas Recomendads</p>
            </div>
            <button type="button" data-testid="start-recipe-btn">Iniciar Receita</button>
          </div>
        )))}
      { console.log(recommendations)}
    </div>
  );
}

DetailsRecipeMeal.propTypes = {
  match: PropTypes.objectOf({
    params: PropTypes.object,
  }).isRequired,
};
