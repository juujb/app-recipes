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

export default function DetailsRecipeMeal({ history, match: { params } }) {
  const [details, setDetails] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [nameButton, setNameButton] = useState('Iniciar receita');
  const [ingredients, setIngredients] = useState([]);
  const [measure, setMeasure] = useState([]);
  const totalArray = 6;
  const progressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
  // const progressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));

  if (!progressRecipes) {
    localStorage.setItem('inProgressRecipes', JSON.stringify({
      cocktails: {},
      meals: {},
    }));
  }

  /* {
    cocktails: {
        id-da-bebida: [lista-de-ingredientes-utilizados],
        ...
    },
    meals: {
        id-da-comida: [lista-de-ingredientes-utilizados],
        ...
    }
  } */

  function arrayIngredients(detailsParam) {
    const ingredientsArray = [];
    const measureArray = [];
    const number = 20;
    for (let index = 1; index <= number; index += 1) {
      const recipe = detailsParam[0];
      ingredientsArray.push(recipe[`strIngredient${index}`]);
      measureArray.push(recipe[`strMeasure${index}`]);
    }
    setIngredients(ingredientsArray);
    setMeasure(measureArray);
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
            <ButtonShare link={ `http://localhost:3000/comidas/${params.id}` } />
            <ButtonFavorite type="meal" recipe={ detail } />
            <button type="button" data-testid="favorite-btn">Favoritar</button>
            <p data-testid="recipe-category">{ detail.strCategory }</p>
            <Ingredients detail={ detail } />
            <div data-testid="instructions">
              <p>{ detail.strInstructions}</p>
            </div>
            <div data-testid="video">
              <a href={ detail.strYoutube }>YouTube</a>
            </div>
            <div>
              { recommendations.slice(0, totalArray).map((drink, indice) => (
                <div key={ drink.idDrink } data-testid={ `${indice}-recomendation-card` }>
                  <Link to={ `bebidas/${drink.idDrink}` }>
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
  match: PropTypes.objectOf({
    params: PropTypes.object,
  }).isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};
