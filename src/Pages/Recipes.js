import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CardRecipes from '../Components/CardRecipes';
import Header from '../Components/Header';
import AppContext from '../context/AppContext';
import { fetchMealsAll, fetchCategories, filterCategorie } from '../services/fetchMeals';

export default function Recipes() {
  const { meals, setMeals } = useContext(AppContext);
  const [categories, setCategories] = useState([]);
  const [toggle, setToggle] = useState('');
  const totalArray = 12;
  const totalCategories = 5;

  async function fetch() {
    const mealsAll = await fetchMealsAll();
    setMeals(mealsAll);
    setToggle('');
  }

  async function fetchCategoriesMeals() {
    const categoriesAll = await fetchCategories();
    setCategories(categoriesAll);
  }

  async function fetchFilterCategorie(categorie) {
    const filterCat = await filterCategorie(categorie);
    setMeals(filterCat);
  }

  useEffect(() => {
    fetch();
    fetchCategoriesMeals();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleClick(event, categorie) {
    if (toggle === categorie) {
      fetch();
    } else {
      fetchFilterCategorie(categorie);
      setToggle(categorie);
    }
  }

  return (
    <div>
      <Header title="Comidas" />
      <div>
        <button type="button" onClick={ fetch }>All</button>
        {
          categories.slice(0, totalCategories).map((categorie) => (
            <button
              type="button"
              key={ categorie.strCategory }
              onClick={ (event) => handleClick(event, categorie.strCategory) }
            >
              { categorie.strCategory}
            </button>
          ))
        }
      </div>
      <div style={ { display: 'flex', flexWrap: 'wrap' } }>
        {
          meals.slice(0, totalArray).map((meal) => (
            <div key={ meal.idMeal }>
              <Link to={ `comidas/${meal.idMeal}` }>
                <CardRecipes
                  index={ meal.idMeal }
                  img={ meal.strMealThumb }
                  name={ meal.strMeal }
                />
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  );
}
