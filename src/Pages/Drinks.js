import React, { useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../Components/Header';
import AppContext from '../context/AppContext';

const alert = 'Sinto muito, não encontramos nenhuma receita para esses filtros.';

export default function Drinks() {
  const { setPage, drinks } = useContext(AppContext);
  useEffect(() => {
    setPage('drinks');
  }, []);

  return (
    <div>
      <Header title="Bebidas" />
      {!drinks
        && global.alert(alert)}
      {drinks
        && drinks.length === 1 && <Redirect to={ `/bebidas/${drinks[0].idDrink}` } />}
    </div>
  );
}
