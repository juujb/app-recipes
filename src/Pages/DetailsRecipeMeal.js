/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CardRecommendation from '../Components/CardRecommendation';
import { fetchRecipesDetails } from '../services/fetchMeals';
import { fetchRecommendations } from '../services/fetchDrinks';
import Ingredients from '../Components/Ingredients';
import ButtonShare from '../Components/ButtonShare';
import ButtonFavorite from '../Components/ButtonFavorite';
import EmbedVideo from '../Components/EmbedVideo';

export default function DetailsRecipeMeal({ history, match: { params } }) {
  const [details, setDetails] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [nameButton, setNameButton] = useState('Iniciar receita');
  const [ingredients, setIngredients] = useState([]);
  const [measures, setMeasures] = useState([]);
  const totalArray = 6;
  const progressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));

  if (!progressRecipes) {
    localStorage.setItem('inProgressRecipes', JSON.stringify({
      cocktails: {},
      meals: {},
    }));
  }

  function arrayIngredients(detailsParam) {
    const ingredientsArray = [];
    const measureArray = [];
    const number = 20;
    for (let index = 1; index <= number; index += 1) {
      const recipe = detailsParam[0];
      ingredientsArray.push(recipe[`strIngredient${index}`]);
      measureArray.push(recipe[`strMeasure${index}`]);
    }
    setIngredients(ingredientsArray.filter((
      ingredientFilter,
    ) => ingredientFilter !== ''));
    setMeasures(measureArray.filter((
      measureFilter,
    ) => measureFilter !== ' '));
  }

  function checkNameButton() {
    if (progressRecipes) {
      const recipesMeal = progressRecipes.meals;
      if (recipesMeal[params.id]) {
        setNameButton('Continuar Receita');
      }
    }
  }

  async function fetch(id) {
    const detailsRecipes = await fetchRecipesDetails(id);
    arrayIngredients(detailsRecipes);
    setDetails(detailsRecipes);
    const recommendationsAll = await fetchRecommendations();
    setRecommendations(recommendationsAll);
  }

  function handleClick() {
    if (nameButton === 'Continuar Receita') {
      history.push(`/comidas/${params.id}/in-progress`);
    } else {
      const newProgressRecipes = {
        cocktails: progressRecipes.cocktails,
        meals: { ...progressRecipes.meals, [params.id]: ingredients },
      };
      localStorage.setItem('inProgressRecipes', JSON.stringify(newProgressRecipes));
      history.push(`/comidas/${params.id}/in-progress`);
    }
  }

  useEffect(() => {
    fetch(params.id);
    checkNameButton();
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
              width="360"
            />
            <h2 data-testid="recipe-title">{ detail.strMeal }</h2>
            <div style={ { display: 'flex', justifyContent: 'right' } }>
              <ButtonShare link={ `http://localhost:3000/comidas/${params.id}` } />
              <ButtonFavorite type="comida" id={ params.id } recipe={ detail } />
            </div>
            <p data-testid="recipe-category">{ detail.strCategory }</p>
            <Ingredients detail={ { ingredients, measures } } />
            <div data-testid="instructions">
              <p>{ detail.strInstructions}</p>
            </div>
            <div data-testid="video">
              <EmbedVideo url={ detail.strYoutube } />
            </div>
            <div style={ { display: 'flex', justifyContent: 'space-around' } }>
              { recommendations.slice(0, totalArray).map((drink, indice) => (
                <div key={ drink.idDrink } data-testid={ `${indice}-recomendation-card` }>
                  <Link to={ `/bebidas/${drink.idDrink}` }>
                    <CardRecommendation
                      index={ indice }
                      img={ drink.strDrinkThumb }
                      name={ drink.strDrink }
                      display={ indice > 1 && 'none' }
                    />
                  </Link>
                </div>
              ))}
            </div>
            <button
              type="button"
              data-testid="start-recipe-btn"
              style={ { position: 'fixed ', bottom: '0', left: '40%' } }
              onClick={ handleClick }
            >
              { nameButton }
            </button>
          </div>
        )))}
    </div>
  );
}

DetailsRecipeMeal.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};
