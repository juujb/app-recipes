import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { fetchRandomDrink } from '../services/fetchDrinks';
import { fetchRandomMeal } from '../services/fetchMeals';

function ExploreButtons() {
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replace
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
      return history.push(`/${URL}/${randomMeal[0].idMeal}`);
    }
    if (URL === 'bebidas') {
      return history.push(`/${URL}/${randomDrink[0].idDrink}`);
    }
  };

  if (URL === 'bebidas') {
    return (
      <>
        <div>
          <Button
            type="button"
            name="ingredientes"
            onClick={ handleClick }
            data-testid="explore-by-ingredient"
          >
            Por Ingredientes
          </Button>
        </div>
        <div>
          <Button
            type="button"
            name="surprise"
            onClick={ handleSurpriseMe }
            data-testid="explore-surprise"
          >
            Me Surpreenda!
          </Button>
        </div>
      </>
    );
  }

  if (URL === 'comidas') {
    return (
      <>
        <div>
          <Button
            type="button"
            name="ingredientes"
            onClick={ handleClick }
            data-testid="explore-by-ingredient"
          >
            Por Ingredientes
          </Button>
        </div>
        <div>
          <Button
            type="button"
            name="area"
            onClick={ handleClick }
            data-testid="explore-by-area"
          >
            Por Local de Origem
          </Button>
        </div>
        <div>
          <Button
            type="button"
            name="surprise"
            onClick={ handleSurpriseMe }
            data-testid="explore-surprise"
          >
            Me Surpreenda!
          </Button>
        </div>
      </>
    );
  }
}

export default ExploreButtons;
