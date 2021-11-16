import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';
import { fetchRecipesByIngredient } from '../services/fetchMeals';

const API_URL = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
const IMAGE_URL = 'https://www.themealdb.com/images/ingredients/';
const MAX_LENGTH = 12;

export default function IngrediensRecipesCards() {
  const [mealsItems, setMealsItems] = useState([]);
  const { setMeals } = useContext(AppContext);
  const history = useHistory();

  useEffect(() => {
    async function fetchIngredients() {
      const response = await fetch(API_URL);
      const mealsIngredients = await response.json();
      setMealsItems(mealsIngredients.meals);
    }
    fetchIngredients();
  }, []);

  async function handleClick(item) {
    const meals = await fetchRecipesByIngredient(item);
    setMeals(meals);
    history.push('/comidas');
  }

  return (
    <div>
      {mealsItems.map(({ strIngredient }, index) => (
        <button
          type="button"
          key={ index }
          data-testid={ `${index}-ingredient-card` }
          onClick={ () => handleClick(strIngredient) }
        >
          <img
            src={ `${IMAGE_URL}${strIngredient}-Small.png` }
            alt={ `${strIngredient}` }
            data-testid={ `${index}-card-img` }
          />
          <p
            key={ index }
            data-testid={ `${index}-card-name` }
          >
            {strIngredient}
          </p>
        </button>)).splice(0, MAX_LENGTH)}
    </div>
  );
}
