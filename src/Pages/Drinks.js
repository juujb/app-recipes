import React, { useEffect, useContext } from 'react';
import Header from '../Components/Header';
import AppContext from '../context/AppContext';

export default function Drinks() {
  const { setPage } = useContext(AppContext);
  useEffect(() => {
    setPage('drinks');
  }, []);

  return (
    <div>
      <Header title="Bebidas" />
    </div>
  );
}
