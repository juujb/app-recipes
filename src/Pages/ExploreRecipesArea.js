import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import {
  fetchAreas,
  fetchMealsAll,
  fetchRecipesByFirstArea,
} from '../services/fetchMeals';
import CardDefault from '../Components/CardDefault';
import AppContext from '../context/AppContext';
import '../styles/PageExplore.css';

export default function ExploreRecipesArea() {
  const { meals, setMeals } = useContext(AppContext);
  const [areas, setAreas] = useState([]);
  const [value, setValue] = useState('All');
  const totalArray = 12;

  async function fetchArea() {
    const areasAll = await fetchAreas();
    setAreas(areasAll);
  }

  async function fetchMeals() {
    const mealsAll = await fetchMealsAll();
    setMeals(mealsAll);
  }

  async function fetchFilterArea(area) {
    const mealsArea = await fetchRecipesByFirstArea(area);
    setMeals(mealsArea);
  }

  async function filterArea(area) {
    if (area === 'All') {
      fetchMeals();
    } else {
      fetchFilterArea(area);
    }
  }

  useEffect(() => {
    fetchArea();
    fetchMeals();
  }, []);

  useEffect(() => {
    filterArea(value);
    console.log(value);
  }, [value]);

  return (
    <div className="container-explore">
      <Header title="Explorar Origem" />
      <div>
        <select
          data-testid="explore-by-area-dropdown"
          value={ value }
          onChange={ ({ target }) => setValue(target.value) }
        >
          <option data-testid="All-option">All</option>
          { areas.map((area) => (
            <option
              key={ area.strArea }
              data-testid={ `${area.strArea}-option` }
            >
              { area.strArea }
            </option>
          ))}
        </select>
      </div>
      <div className="cards">
        { meals
          && meals.slice(0, totalArray).map((meal, indice) => (
            <div key={ meal.idMeal } className="container-card">
              <Link to={ `/comidas/${meal.idMeal}` }>
                <CardDefault
                  index={ indice }
                  img={ meal.strMealThumb }
                  name={ meal.strMeal }
                />
              </Link>
            </div>
          ))}
      </div>
      <Footer />
    </div>
  );
}
