import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import AppContext from '../context/AppContext';
import { fetchDrinkByIngredients } from '../services/fetchDrinks';
import '../styles/PageExplore.css';

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
  }

  return (
    <div className="container-explore">
      <div className="cards">
        {drinkItems.map(({ strIngredient1 }, index) => (
          <div key={ index } className="container-card">
            <Card
              style={ { width: '9rem' } }
              data-testid={ `${index}-ingredient-card` }
              onClick={ () => handleClick(strIngredient1) }
            >
              <Card.Img
                variant="top"
                src={ `${IMAGE_URL}${strIngredient1}-Small.png` }
                alt={ `${strIngredient1}` }
                data-testid={ `${index}-card-img` }
              />
              <Card.Body>
                <Card.Title
                  data-testid={ `${index}-card-name` }
                  className="card-title"
                >
                  {strIngredient1}
                </Card.Title>
              </Card.Body>
            </Card>
          </div>
        )).splice(0, MAX_LENGTH)}
      </div>
    </div>
  );
}
