import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import whiteHeart from 'src/images/whiteHeartIcon.svg';
import blackHeart from 'src/images/blackHeartIcon.svg';

export default function ButtonFavorite({ type, recipe }) {
  const [favorite, setFavorite] = useState(false);
  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));

  if (!favoriteRecipes) {
    localStorage.setItem('favoriteRecipes', JSON.stringify([]));
  }

  // favoriteRecipes: [{ id, type, area, category, alcoholicOrNot, name, image }]

  function checkFavorite() {
    const recipeFavorite = favoriteRecipes.find((
      recipeFilter,
    ) => recipeFilter.id === recipe.id);
    setFavorite(recipeFavorite);
  }

  function handleClick() {

  }

  useEffect(() => {
    checkFavorite();
  }, []);

  return (
    <button
      type="button"
      data-testid="favorite-btn"
      onClick={ () => handleClick() }
    >
      <img src={ favorite ? blackHeart : whiteHeart } alt="botão de Favoritar" />
    </button>
  );
}

ButtonFavorite.propTypes = {
  type: PropTypes.string.isRequired,
  recipe: PropTypes.objectOf(PropTypes.any).isRequired,
};
