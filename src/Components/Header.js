import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import AppContext from '../context/AppContext';
import '../styles/Header.css';
import { Button, Form } from 'react-bootstrap';

export default function Header({ title, withSearch = true }) {
  const [showSerch, setSearch] = useState(false);
  const { handleRadioClick,
    handleQuerySearch, handleSearchRecipes } = useContext(AppContext);

  const handleSearch = () => {
    setSearch(!showSerch);
  };

  const searchInput = () => (
    <Form className="searchForm">
      <Form.Group className="mb-3" controlId="search">
        <Form.Control
          name="search"
          data-testid="search-input"
          type="text"
          onChange={ handleQuerySearch }
          placeholder="Pesquisar"
        />
      </Form.Group>
      <Form.Check
        inline
        type="radio"
        id="Ingrediente"
        name="searchFor"
        value="ingredient"
        onClick={ handleRadioClick }
        data-testid="ingredient-search-radio"
        className="mb-3"
        label="Ingrediente"
      />

      <Form.Check
        inline
        type="radio"
        id="Nome"
        name="searchFor"
        value="name"
        onClick={ handleRadioClick }
        data-testid="name-search-radio"
        label="Nome"
      />

      <Form.Check
        inline
        type="radio"
        id="PrimeiraLetra"
        name="searchFor"
        value="first-letter"
        onClick={ handleRadioClick }
        data-testid="first-letter-search-radio"
        label="Primeira Letra"
      />

      <Button
        variant="primary"
        data-testid="exec-search-btn"
        onClick={ handleSearchRecipes }
        type="button"
      >
        Buscar
      </Button>
    </Form>

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
    <header className="header">
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
