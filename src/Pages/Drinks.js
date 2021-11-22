import React, { useContext, useState, useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import CardDefault from '../Components/CardDefault';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import AppContext from '../context/AppContext';
import {
  fetchAllDrinks,
  fetchDrinkCategories,
  fetchFilterDrinkCategorie,
} from '../services/fetchDrinks';
import '../styles/PageDrinks.css';

export default function Drinks() {
  const {
    setPage,
    drinks,
    setDrinks,
    fromCategorie,
    setFromCategorie,
  } = useContext(AppContext);
  const [categories, setCategories] = useState([]);
  const [toggle, setToggle] = useState('');
  const totalArray = 12;
  const totalCategories = 5;
  const alert = 'Sinto muito, não encontramos nenhuma receita para esses filtros.';

  async function fetch() {
    const drinksAll = await fetchAllDrinks();
    setDrinks(drinksAll);
    setToggle('');
  }

  async function fetchCategoriesDrinks() {
    const categoriesAll = await fetchDrinkCategories();
    setCategories(categoriesAll);
  }

  async function fetchFilterCategorie(categorie) {
    const filterDrink = await fetchFilterDrinkCategorie(categorie);
    setDrinks(filterDrink);
  }

  useEffect(() => {
    if (drinks.length === 0) fetch();
    fetchCategoriesDrinks();
    setPage('drinks');
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
    <div className="container-drinks">
      <Header title="Bebidas" />
      {!drinks
        && global.alert(alert)}
      { !fromCategorie
        && drinks
        && drinks.length === 1 && <Redirect to={ `/bebidas/${drinks[0].idDrink}` } />}
      <div>
        <div className="buttonGroup">
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
                { categorie.strCategory }
              </Button>
            ))
          }
        </div>
      </div>
      <div className="cards">
        { drinks
          && drinks.slice(0, totalArray).map((drink, indice) => (
            <div key={ drink.idDrink } className="container-card">
              <Link to={ `/bebidas/${drink.idDrink}` }>
                <CardDefault
                  index={ indice }
                  img={ drink.strDrinkThumb }
                  name={ drink.strDrink }
                  category={ drink.strCategory }
                />
              </Link>
            </div>
          ))}
      </div>
      <Footer />
    </div>
  );
}
