import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CardDefault from '../Components/CardDefault';
import Header from '../Components/Header';
/* import { Link } from 'react-router-dom';
import CardDefault from '../Components/CardDefault'; */
import AppContext from '../context/AppContext';
import {
  fetchAllDrinks,
  fetchDrinkCategories,
  fetchFilterDrinkCategorie,
} from '../services/fetchDrinks';

export default function Drinks() {
  const { drinks, setDrinks } = useContext(AppContext);
  const [categories, setCategories] = useState([]);
  const [toggle, setToggle] = useState('');
  const totalArray = 12;
  const totalCategories = 5;

  async function fetch() {
    const drinksAll = await fetchAllDrinks();
    setDrinks(drinksAll);
    setToggle('');
  }

  async function fetchCategoriesDrinks() {
    const categoriesAll = await fetchDrinkCategories();
    setCategories(categoriesAll);
    console.log(categories);
  }

  async function fetchFilterCategorie(categorie) {
    const filterDrink = await fetchFilterDrinkCategorie(categorie);
    setDrinks(filterDrink);
  }

  useEffect(() => {
    fetch();
    fetchCategoriesDrinks();
  }, []);

  function handleClick(categorie) {
    if (toggle === categorie) {
      fetch();
    } else {
      fetchFilterCategorie(categorie);
      setToggle(categorie);
    }
  }

  return (
    <div>
      <Header title="Bebidas" />
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
        {
          drinks.slice(0, totalArray).map((drink, indice) => (
            <div key={ drink.idDrink }>
              <Link to={ `bebidas/${drink.idDrink}` }>
                <CardDefault
                  index={ indice }
                  img={ drink.strDrinkThumb }
                  name={ drink.strDrink }
                />
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  );
}
