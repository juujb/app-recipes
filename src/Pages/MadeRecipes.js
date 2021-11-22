import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Header from '../Components/Header';
import MadeDrinkCard from '../Components/MadeDrinkCard';
import MadeMealCard from '../Components/MadeMealCard';
import '../styles/PageMadeRecipes.css';

export default function MadeRecipes() {
  const madeRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  const [filtered, setFiltered] = useState(madeRecipes);

  const filter = (recipeType) => {
    const filteredRecipes = madeRecipes.filter(({ type }) => type.includes(recipeType));
    setFiltered(filteredRecipes);
  };

  return (
    <div className="container-made-recipes">
      <Header title="Receitas Feitas" withSearch={ false } />
      <div className="main-made-recipes">
        <div>
          <Button
            variant="primary"
            type="button"
            onClick={ () => filter('') }
            data-testid="filter-by-all-btn"
          >
            All
          </Button>
          <Button
            variant="primary"
            type="button"
            onClick={ () => filter('comida') }
            data-testid="filter-by-food-btn"
          >
            Food
          </Button>
          <Button
            variant="primary"
            type="button"
            onClick={ () => filter('bebida') }
            data-testid="filter-by-drink-btn"
          >
            Drinks
          </Button>
        </div>
        <div className="card-made-recipes">
          {filtered && filtered
            .map((recipe, index) => {
              if (recipe.type === 'comida') {
                return (
                  <div key={ recipe.name } className="container-card">
                    <MadeMealCard meal={ recipe } index={ index } />
                  </div>
                );
              }
              return (
                <div key={ recipe.name } className="container-card">
                  <MadeDrinkCard drink={ recipe } index={ index } />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
