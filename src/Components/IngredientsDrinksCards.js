import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';
import { fetchDrinkByIngredients } from '../services/fetchDrinks';

const API_URL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';
const IMAGE_URL = 'https://www.thecocktaildb.com/images/ingredients/';
const MAX_LENGTH = 12;

export default function IngrediensDrinkCards() {
  const [drinkItems, setDrinkItems] = useState([]);
  const { setDrinks } = useContext(AppContext);
  const history = useHistory();

  useEffect(() => {
    async function fetchIngredients() {
      const response = await fetch(API_URL);
      const drinksIngredients = await response.json();
      setDrinkItems(drinksIngredients.drinks);
    }
    fetchIngredients();
  }, []);

  async function handleClick(item) {
    const drink = await fetchDrinkByIngredients(item);
    setDrinks(drink);
    history.push('/bebidas');
    console.log(item);
    console.log(drink);
  }

  return (
    <div>
      {drinkItems.map(({ strIngredient1 }, index) => (
        <button
          type="button"
          key={ index }
          data-testid={ `${index}-ingredient-card` }
          onClick={ () => handleClick(strIngredient1) }
        >
          <img
            src={ `${IMAGE_URL}${strIngredient1}-Small.png` }
            alt={ `${strIngredient1}` }
            data-testid={ `${index}-card-img` }
          />
          <p
            key={ index }
            data-testid={ `${index}-card-name` }
          >
            {strIngredient1}
          </p>
        </button>)).splice(0, MAX_LENGTH)}
    </div>
  );
}
