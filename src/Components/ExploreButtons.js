import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { fetchRandomDrink } from '../services/fetchDrinks';
import { fetchRandomMeal } from '../services/fetchMeals';

function ExploreButtons() {
  const history = useHistory();
  const URL = window.location.pathname.replace('/explorar/', '');

  const [randomMeal, setRandomMeal] = useState([]);
  const [randomDrink, setRandomDrink] = useState([]);

  useEffect(() => {
    const getRandomDrink = async () => {
      const reponse = await fetchRandomDrink();
      setRandomDrink(reponse);
    };

    const getRandomMeal = async () => {
      const reponse = await fetchRandomMeal();
      setRandomMeal(reponse);
    };

    getRandomDrink();
    getRandomMeal();
  }, []);

  const handleClick = ({ target: { name } }) => history.push(`/explorar/${URL}/${name}`);

  const handleSurpriseMe = () => {
    if (URL === 'comidas') {
      return history.push(`/${URL}/${randomMeal.idMeal}`);
    }
    if (URL === 'bebidas') {
      return history.push(`/${URL}/${randomDrink.idDrink}`);
    }
  };

  if (URL === 'bebidas') {
    return (
      <div>
        <button
          type="button"
          name="ingredientes"
          onClick={ handleClick }
          data-testid="explore-by-ingredient"
        >
          Por Ingredientes
        </button>

        <button
          type="button"
          name="surprise"
          onClick={ handleSurpriseMe }
          data-testid="explore-surprise"
        >
          Me Surpreenda!
        </button>
      </div>
    );
  }

  if (URL === 'comidas') {
    return (
      <div>
        <button
          type="button"
          name="ingredientes"
          onClick={ handleClick }
          data-testid="explore-by-ingredient"
        >
          Por Ingredientes
        </button>

        <button
          type="button"
          name="area"
          onClick={ handleClick }
          data-testid="explore-by-area"
        >
          Por Local de Origem
        </button>

        <button
          type="button"
          name="surprise"
          onClick={ handleSurpriseMe }
          data-testid="explore-surprise"
        >
          Me Surpreenda!
        </button>
      </div>
    );
  }
}

export default ExploreButtons;
