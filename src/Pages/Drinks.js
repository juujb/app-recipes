import React, { useContext, useState, useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';
import CardDefault from '../Components/CardDefault';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import AppContext from '../context/AppContext';
import {
  fetchAllDrinks,
  fetchDrinkCategories,
  fetchFilterDrinkCategorie,
} from '../services/fetchDrinks';

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
    fetch();
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
    <div>
      <Header title="Bebidas" />
      {!drinks
        && global.alert(alert)}
      { !fromCategorie
        && drinks
        && drinks.length === 1 && <Redirect to={ `/bebidas/${drinks[0].idDrink}` } />}
      <div>
        <button
          type="button"
          data-testid="All-category-filter"
          onClick={ fetch }
        >
          All
        </button>
        {
          categories.slice(0, totalCategories).map((categorie) => (
            <button
              type="button"
              key={ categorie.strCategory }
              data-testid={ `${categorie.strCategory}-category-filter` }
              onClick={ () => handleClick(categorie.strCategory) }
            >
              { categorie.strCategory }
            </button>
          ))
        }
      </div>
      <div style={ { display: 'flex', flexWrap: 'wrap' } }>
        { drinks
          && drinks.slice(0, totalArray).map((drink, indice) => (
            <div key={ drink.idDrink }>
              <Link to={ `bebidas/${drink.idDrink}` }>
                <CardDefault
                  index={ indice }
                  img={ drink.strDrinkThumb }
                  name={ drink.strDrink }
                />
              </Link>
            </div>
          ))}
      </div>
      <Footer />
    </div>
  );
}
