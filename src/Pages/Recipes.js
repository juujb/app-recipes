import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../Components/Header';
import AppContext from '../context/AppContext';

export default function Recipes() {
  const { meals } = useContext(AppContext);
  return (
    <div>
      <Header title="Comidas" />
      {console.log(meals)}
      {meals.length === 1 && <Redirect to={ `/comidas/${meals[0].idMeal}` } />}
    </div>
  );
}
