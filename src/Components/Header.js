import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

export default function Header({ title, withSearch = true }) {
  const [showSerch, setSearch] = useState(false);

  const handleSearch = () => {
    setSearch(!showSerch);
  };

  const searchInput = () => (
    <label htmlFor="search">
      <input name="search" data-testid="search-input" type="text" />
    </label>
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
