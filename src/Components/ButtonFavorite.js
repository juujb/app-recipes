import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import whiteHeart from '../images/whiteHeartIcon.svg';
import blackHeart from '../images/blackHeartIcon.svg';

export default function ButtonFavorite({ type, id, recipe }) {
  const [favorite, setFavorite] = useState(false);
  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));

  if (!favoriteRecipes) {
    localStorage.setItem('favoriteRecipes', JSON.stringify([]));
  }

  function createObj() {
    let newObj;
    if (type === 'comida') {
      newObj = {
        id: recipe.idMeal,
        type: 'comida',
        area: recipe.strArea,
        category: recipe.strCategory,
        alcoholicOrNot: '',
        name: recipe.strMeal,
        image: recipe.strMealThumb,
      };
    } else {
      newObj = {
        id: recipe.idDrink,
        type: 'bebida',
        area: '',
        category: recipe.strCategory,
        alcoholicOrNot: recipe.strAlcoholic,
        name: recipe.strDrink,
        image: recipe.strDrinkThumb,
      };
    }
    return newObj;
  }

  function handleClick() {
    if (favorite) {
      const objFavorite = createObj();
      console.log(objFavorite);
      const newFavoriteArray = favoriteRecipes.filter((
        recipeFilter,
      ) => recipeFilter.id !== id);
      console.log(newFavoriteArray);
      localStorage.setItem('favoriteRecipes', JSON.stringify(newFavoriteArray));
      setFavorite(false);
    } else {
      const objFavorite = createObj();
      console.log(objFavorite);
      const favoriteArray = favoriteRecipes;
      favoriteArray.push(objFavorite);
      localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteArray));
      setFavorite(true);
    }
  }

  function checkFavorite() {
    if (favoriteRecipes) {
      const favoriteRecipesSome = favoriteRecipes.some((
        recipeFav,
      ) => recipeFav.id === id);
      setFavorite(favoriteRecipesSome);
    }
  }

  useEffect(() => {
    checkFavorite();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <button
      type="button"
      data-testid="favorite-btn"
      src={ favorite ? blackHeart : whiteHeart }
      onClick={ handleClick }
    >
      <img src={ favorite ? blackHeart : whiteHeart } alt="botão de Favoritar" />
    </button>
  );
}

ButtonFavorite.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  recipe: PropTypes.objectOf(PropTypes.any).isRequired,
};
