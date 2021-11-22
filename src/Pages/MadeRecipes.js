import React, { useState } from 'react';
import Header from '../Components/Header';
import MadeDrinkCard from '../Components/MadeDrinkCard';
import MadeMealCard from '../Components/MadeMealCard';

export default function MadeRecipes() {
  const madeRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  const [filtered, setFiltered] = useState(madeRecipes);

  const filter = (recipeType) => {
    const filteredRecipes = madeRecipes.filter(({ type }) => type.includes(recipeType));
    setFiltered(filteredRecipes);
  };

  return (
    <div>
      <Header title="Receitas Feitas" withSearch={ false } />
      <button
        type="button"
        onClick={ () => filter('') }
        data-testid="filter-by-all-btn"
      >
        All
      </button>
      <button
        type="button"
        onClick={ () => filter('comida') }
        data-testid="filter-by-food-btn"
      >
        Food
      </button>
      <button
        type="button"
        onClick={ () => filter('bebida') }
        data-testid="filter-by-drink-btn"
      >
        Drinks
      </button>
      {filtered && filtered
        .map((recipe, index) => {
          if (recipe.type === 'comida') {
            return (<MadeMealCard key={ recipe.name } meal={ recipe } index={ index } />);
          }
          return (<MadeDrinkCard key={ recipe.name } drink={ recipe } index={ index } />);
        })}
    </div>
  );
}
