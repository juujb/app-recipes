/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CardRecommendation from '../Components/CardRecommendation';
import { fetchRecipesDetails } from '../services/fetchDrinks';
import { fetchRecommendations } from '../services/fetchMeals';
import Ingredients from '../Components/Ingredients';
import ButtonShare from '../Components/ButtonShare';
import ButtonFavorite from '../Components/ButtonFavorite';

export default function DetailsRecipeDrink({ history, match: { params } }) {
  const [details, setDetails] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [nameButton, setNameButton] = useState('Iniciar receita');
  const [ingredients, setIngredients] = useState([]);
  const [measures, setMeasure] = useState([]);
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
    ) => ingredientFilter !== null));
    setMeasure(measureArray.filter((
      measureFilter,
    ) => measureFilter !== null));
  }

  function checkNameButton() {
    if (progressRecipes) {
      const recipesDrink = progressRecipes.cocktails;
      if (recipesDrink[params.id]) {
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
      history.push(`/bebidas/${params.id}/in-progress`);
    } else {
      const newProgressRecipes = {
        cocktails: { ...progressRecipes.cocktails, [params.id]: ingredients },
        meals: { ...progressRecipes.meals },
      };
      localStorage.setItem('inProgressRecipes', JSON.stringify(newProgressRecipes));
      history.push(`/bebidas/${params.id}/in-progress`);
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
              src={ detail.strDrinkThumb }
              alt={ detail.strDrink }
              data-testid="recipe-photo"
              width="360"
            />
            <h2 data-testid="recipe-title">{ detail.strDrink }</h2>
            <div style={ { display: 'flex', justifyContent: 'right' } }>
              <ButtonShare link={ `http://localhost:3000/bebidas/${params.id}` } />
              <ButtonFavorite type="bebidas" id={ params.id } recipe={ detail } />
            </div>
            <p>{ detail.strCategory }</p>
            <p data-testid="recipe-category">{ detail.strAlcoholic }</p>
            <Ingredients detail={ { ingredients, measures } } />
            <div data-testid="instructions">
              <p>{ detail.strInstructions}</p>
            </div>
            <div style={ { display: 'flex', justifyContent: 'space-around' } }>
              { recommendations.slice(0, totalArray).map((meal, indice) => (
                <div key={ meal.idMeal } data-testid={ `${indice}-recomendation-card` }>
                  <Link exact to={ `/comidas/${meal.idMeal}` }>
                    <CardRecommendation
                      index={ indice }
                      img={ meal.strMealThumb }
                      name={ meal.strMeal }
                      category={ meal.strCategory }
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

DetailsRecipeDrink.propTypes = {
  match: PropTypes.objectOf({
    params: PropTypes.object,
  }).isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};
