import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';
import { fetchRecipesByName,
  fetchRecipesByFirstLetter, fetchRecipesByIngredient } from '../services/fetchMeals';
import { fetchDrinkByLetter,
  fetchDrinkByName, fetchDrinkByIngredients } from '../services/fetchDrinks';

const LOGIN_STATE = {
  email: '',
  password: '',
};

function Provider({ children }) {
  const [meals, setMeals] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [loginInfo, setInfos] = useState(LOGIN_STATE);
  const [query, setQuery] = useState('');
  const [searchFor, setSearchParam] = useState('');
  const [page, setPage] = useState('food');

  const handleQuerySearch = ({ target: { value } }) => {
    setQuery(value);
  };

  const handleLoginInfos = ({ target: { name, value } }) => {
    setInfos({
      ...loginInfo,
      [name]: value,
    });
  };

  const handleSearchRecipes = async () => {
    if (page === 'food') {
      if (searchFor === 'ingredient') {
        const recipes = await fetchRecipesByIngredient(query);
        return setMeals(recipes);
      }
      if (searchFor === 'name') {
        const recipes = await fetchRecipesByName(query);
        return setMeals(recipes);
      }
      if (searchFor === 'first-letter' && query.length > 1) {
        return global.alert('Sua busca deve conter somente 1 (um) caracter');
      }
      const recipes = await fetchRecipesByFirstLetter(query);
      return setMeals(recipes);
    }
    if (searchFor === 'ingredient') {
      const recipes = await fetchDrinkByIngredients(query);
      return setDrinks(recipes);
    }
    if (searchFor === 'name') {
      const recipes = await fetchDrinkByName(query);
      return setDrinks(recipes);
    }
    if (searchFor === 'first-letter' && query.length > 1) {
      return global.alert('Sua busca deve conter somente 1 (um) caracter');
    }
    const recipes = await fetchDrinkByLetter(query);
    return setDrinks(recipes);
  };

  const handleRadioClick = ({ target: { value } }) => {
    setSearchParam(value);
  };

  const contextValue = {
    meals,
    setMeals,
    drinks,
    searchFor,
    setDrinks,
    loginInfo,
    handleLoginInfos,
    handleRadioClick,
    handleQuerySearch,
    handleSearchRecipes,
    setPage,
  };

  return (
    <AppContext.Provider value={ contextValue }>
      { children }
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
