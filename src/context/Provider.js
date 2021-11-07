import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

const LOGIN_STATE = {
  email: '',
  password: '',
};

function Provider({ children }) {
  const [meals, setMeals] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [loginInfo, setInfos] = useState(LOGIN_STATE);

  const handleLoginInfos = ({ target: { name, value } }) => {
    setInfos({
      ...loginInfo,
      [name]: value,
    });
  };

  const contextValue = {
    meals,
    setMeals,
    drinks,
    setDrinks,
    loginInfo,
    handleLoginInfos,
  };

  return (
    <AppContext.Provider value={ contextValue }>
      { children }
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
