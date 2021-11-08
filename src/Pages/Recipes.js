import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import AppContext from '../context/AppContext';

const alert = 'Sinto muito, não encontramos nenhuma receita para esses filtros.';

export default function Recipes() {
  const { meals } = useContext(AppContext);
  return (
    <div>
      <Header title="Comidas" />
      {!meals
        && global.alert(alert)}
      {meals && meals.length === 1 && <Redirect to={ `/comidas/${meals[0].idMeal}` } />}
      <Footer />
    </div>
  );
}
