import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import AppContext from '../context/AppContext';
import { fetchRecipesByIngredient } from '../services/fetchMeals';
import '../styles/PageExplore.css';

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
    <div className="container-explore">
      <div className="cards">
        {mealsItems.map(({ strIngredient }, index) => (
          <div key={ index } className="container-card">
            <Card
              style={ { width: '9rem' } }
              data-testid={ `${index}-ingredient-card` }
              onClick={ () => handleClick(strIngredient) }
            >
              <Card.Img
                variant="top"
                src={ `${IMAGE_URL}${strIngredient}-Small.png` }
                alt={ `${strIngredient}` }
                data-testid={ `${index}-card-img` }
              />
              <Card.Body>
                <Card.Title
                  data-testid={ `${index}-card-name` }
                  className="card-title"
                >
                  {strIngredient}
                </Card.Title>
              </Card.Body>
            </Card>
          </div>
        )).splice(0, MAX_LENGTH)}
      </div>
    </div>
  );
}
