import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ING_LIST_STATE = {
  cocktails: {},
  meals: {},
};
export default function Ingredients({ ingredients, medidas, type = 'meals', id }) {
  const [ingredientList, setIngredienteList] = useState(ING_LIST_STATE);
  const [recipeList, setRecipeItem] = useState([]);

  const newObj = ingredientList;
  const add = (onde, value) => {
    setRecipeItem([...recipeList, value]);
    const oldArray = ingredientList[onde][id] ? ingredientList[onde][id] : null;
    newObj[onde] = {
      ...newObj[onde],
      [id]: oldArray ? [...oldArray, value] : [...[value]],
    };
    localStorage.setItem('inProgressRecipes', JSON.stringify(newObj));
    return setIngredienteList(newObj);
  };

  const remove = (onde, value) => {
    const oldArray = ingredientList[onde][id] ? ingredientList[onde][id] : null;
    const newArray = oldArray && oldArray.filter((item) => item !== value);
    setRecipeItem(newArray);
    newObj[onde] = {
      ...newObj[onde],
      [id]: oldArray ? newArray : '',
    };
    localStorage.setItem('inProgressRecipes', JSON.stringify(newObj));
    return setIngredienteList(newObj);
  };

  const handleIngredientList = (ev, onde) => {
    const { target: { value } } = ev;
    if (!recipeList.includes(value)) {
      return add(onde, value);
    }
    return remove(onde, value);
  };

  return (
    <div>
      <h1>Ingredientes</h1>
      <ul>
        {ingredients && ingredients
          .map((ingrediente, index) => (
            <li data-testid={ `${index}-ingredient-step` } key={ ingrediente }>
              <input
                type="checkbox"
                value={ ingrediente }
                onChange={ (ev) => handleIngredientList(ev, type) }
              />
              {ingrediente}
              <span>
                {' '}
                -
                {' '}
                { medidas[index] }
              </span>
            </li>
          ))}
      </ul>
    </div>
  );
}

Ingredients.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.any),
  medidas: PropTypes.arrayOf(PropTypes.any),
  type: PropTypes.string,
  id: PropTypes.string,
};

Ingredients.defaultProps = {
  ingredients: null,
  medidas: null,
  type: 'meals',
  id: null,
};
