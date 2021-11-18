import React, { useContext, useState, useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Button, ButtonGroup } from 'react-bootstrap';
import CardDefault from '../Components/CardDefault';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import AppContext from '../context/AppContext';
import { fetchMealsAll, fetchCategories, filterCategorie } from '../services/fetchMeals';
import '../styles/CardDefault.css';
import '../styles/PageRecipes.css';

export default function Recipes() {
  const { meals, setMeals, fromCategorie, setFromCategorie } = useContext(AppContext);
  const [categories, setCategories] = useState([]);
  const [toggle, setToggle] = useState('');
  const totalArray = 12;
  const totalCategories = 5;
  const alert = 'Sinto muito, não encontramos nenhuma receita para esses filtros.';

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
    if (meals.length === 0) fetch();
    fetchCategoriesMeals();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleClick(categorie) {
    if (toggle === categorie) {
      fetch();
    } else {
      fetchFilterCategorie(categorie);
      setToggle(categorie);
    }
    setFromCategorie(!fromCategorie);
  }

  return (
    <div className="container-recipes">
      <Header title="Comidas" />
      {!meals
        && global.alert(alert)}
      { !fromCategorie
          && meals
          && meals.length === 1 && <Redirect to={ `/comidas/${meals[0].idMeal}` } />}
      <div id="buttonGroup">
        <ButtonGroup size="sm" aria-label="Basic example">
          <Button
            variant="primary"
            type="button"
            data-testid="All-category-filter"
            onClick={ fetch }
          >
            All
          </Button>
          {
            categories.slice(0, totalCategories).map((categorie) => (
              <Button
                variant="primary"
                type="button"
                key={ categorie.strCategory }
                data-testid={ `${categorie.strCategory}-category-filter` }
                onClick={ () => handleClick(categorie.strCategory) }
              >
                { categorie.strCategory}
              </Button>
            ))
          }
        </ButtonGroup>
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
                  id={ meal.idMeal }
                  category={ meal.strCategory }
                  area={ meal.strArea }
                />
              </Link>
            </div>
          ))}
      </div>
      <Footer />
    </div>
  );
}
