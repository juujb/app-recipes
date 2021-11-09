import React, { useContext, useState } from 'react';
import Header from '../Components/Header';
import MadeMealCard from '../Components/MadeMealCard';
import AppContext from '../context/AppContext';

export default function MadeRecipes() {
  const { madeRecipes } = useContext(AppContext);
  const [filter, setFilter] = useState('');
  return (
    <div>
      <Header title="Receitas Feitas" withSearch={ false } />
      <button
        data-testid="filter-by-all-btn"
        onClick={ () => setFilter('') }
      >
        All
      </button>
      <button
        data-testid="filter-by-food-btn"
        onClick={ () => setFilter('meal') }
      >
        Food
      </button>
      <button
        data-testid="filter-by-drink-btn"
        onClick={ () => setFilter('drinks') }
      >
        Drinks
      </button>
      <span ></span>
      {madeRecipes.filter((recipe) => recipe.type === filter)
        .map((recipe, index) => {
          if (recipe.type === 'meal') {
            <MadeMealCard meal={ recipe } index={ index } doneDate={'00-00-0000'} />
          }
          <MadeDrinkCard drink={ drink } index={ index } doneDate={'00-00-0000'} />
        })
      }
    </div>
  );
}
