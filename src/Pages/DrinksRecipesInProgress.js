import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchDrinkById } from '../services/fetchDrinks';
import Img from '../Components/InProgress/Img';
import Ingredients from '../Components/InProgress/Ingredients';
import Instructions from '../Components/InProgress/Instructions';

function DrinksRecipesInProgress({ match: { params: { id } } }) {
  const [recipe, setRecipe] = useState();
  const [recipeDone, setFinishRecipe] = useState(true);
  const [redirect, setRedirect] = useState(false);

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

  const redirectPage = () => {
    setRedirect(!redirect);
  };

  const page = () => (
    <div>
      <Img
        src={ imgSrc }
        title={ title }
        category={ categorie }
        type="bebida"
        id={ id }
        recipe={ recipe }
        link={ `http://localhost:3000/bebidas/${id}` }
      />
      <Ingredients
        ingredients={ ingredients }
        medidas={ measurements }
        type="cocktails"
        id={ id }
        setFinishRecipe={ setFinishRecipe }
        recipeDone={ recipeDone }
      />
      <Instructions instruction={ instruction } />
      <button
        disabled={ recipeDone }
        data-testid="finish-recipe-btn"
        type="button"
        onClick={ redirectPage }
      >
        Finalizar Receita

      </button>
    </div>
  );

  useEffect(() => {
    const fetchRecipe = async () => {
      const response = await fetchDrinkById(id);
      setRecipe(response);
    };
    fetchRecipe();
  }, []);

  return (
    <>
      { redirect && <Redirect to="/receitas-feitas" />}
      { !redirect && page() }
    </>
  );
}

DrinksRecipesInProgress.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default DrinksRecipesInProgress;
