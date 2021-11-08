import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import AppContext from '../context/AppContext';

export default function Header({ title, withSearch = true }) {
  const [showSerch, setSearch] = useState(false);
  const { handleRadioClick,
    handleQuerySearch, handleSearchRecipes } = useContext(AppContext);

  const handleSearch = () => {
    setSearch(!showSerch);
  };

  const searchInput = () => (
    <form>
      <label htmlFor="search">
        <input
          name="search"
          data-testid="search-input"
          type="text"
          onChange={ handleQuerySearch }
        />
      </label>
      <label htmlFor="Ingrediente">
        <input
          type="radio"
          id="Ingrediente"
          name="searchFor"
          value="ingredient"
          onClick={ handleRadioClick }
          data-testid="ingredient-search-radio"
        />
        Ingrediente
      </label>
      <label htmlFor="Nome">
        <input
          type="radio"
          id="Nome"
          name="searchFor"
          value="name"
          onClick={ handleRadioClick }
          data-testid="name-search-radio"
        />
        Nome
      </label>
      <label htmlFor="PrimeiraLetra">
        <input
          type="radio"
          id="PrimeiraLetra"
          name="searchFor"
          value="first-letter"
          onClick={ handleRadioClick }
          data-testid="first-letter-search-radio"
        />
        Primeira Letra
      </label>
      <button
        data-testid="exec-search-btn"
        onClick={ handleSearchRecipes }
        type="button"
      >
        Buscar
      </button>
    </form>

  );

  const searchBtn = () => (
    <button
      type="button"
      onClick={ handleSearch }
      data-testid="search-top-btn"
      src={ searchIcon }
    >
      <img src={ searchIcon } alt="Icone de busca" />
    </button>
  );

  const header = () => (
    <header>
      <Link to="/perfil">
        <img src={ profileIcon } data-testid="profile-top-btn" alt="Icone de perfil" />
      </Link>
      <h1 data-testid="page-title">{ title }</h1>
      {withSearch
        && searchBtn()}
      {showSerch
        && searchInput()}
    </header>
  );

  return (
    <>
      { header() }
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  withSearch: PropTypes.bool,
};

Header.defaultProps = {
  withSearch: true,
};
