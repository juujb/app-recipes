import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { fetchDrinkById } from '../services/fetchDrinks';
import Img from '../Components/InProgress/Img';
import Ingredients from '../Components/InProgress/Ingredients';
import Instructions from '../Components/InProgress/Instructions';

function DrinksRecipesInProgress({ match: { params: { id } } }) {
  const [recipe, setRecipe] = useState();

  const title = recipe && recipe.strDrink;
  const imgSrc = recipe && recipe.strDrinkThumb;
  const categorie = recipe && recipe.strAlcoholic;
  const instruction = recipe && recipe.strInstructions;
  const ingredientKeys = recipe && Object
    .keys(recipe).filter((key) => key.includes('strIngredient'));
  const ingredients = recipe && ingredientKeys
    .map((key) => recipe[key]).filter((value) => value !== '' && value !== null);
  const measureKeys = recipe && Object.keys(recipe)
    .filter((key) => key.includes('strMeasure'));
  const measurements = recipe && measureKeys
    .map((key) => recipe[key]).filter((value) => value !== ' ' && value !== null);
  console.log(recipe);

  useEffect(() => {
    const fetchRecipe = async () => {
      const response = await fetchDrinkById(id);
      setRecipe(response);
    };
    fetchRecipe();
  }, []);

  return (
    <div>
      <Img src={ imgSrc } title={ title } category={ categorie } />
      <Ingredients ingredients={ ingredients } medidas={ measurements } />
      <Instructions instruction={ instruction } />
      <button data-testid="finish-recipe-btn" type="button">Finalizar Receita</button>
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
