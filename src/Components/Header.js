import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import ProfileIcon from '../images/profileIcon.svg';
import SearchIcon from '../images/searchIcon.svg';

export default function Header({ title, withSearch = true }) {
  const [redirect, setRedirect] = useState(false);
  const [showSerch, setSearch] = useState(false);

  const handleProfileRote = () => {
    setRedirect(true);
  };

  const handleSearch = () => {
    setSearch(!showSerch);
  };

  const searchInput = () => (
    <label htmlFor="search">
      <input name="search" data-testid="search-input" type="text" />
    </label>
  );

  const searchBtn = () => (
    <button type="button" data-testid="search-top-btn" onClick={ handleSearch }>
      <img src={ SearchIcon } alt="search Icon" />
    </button>
  );

  const header = () => (
    <header>
      <button type="button" data-testid="profile-top-btn" onClick={ handleProfileRote }>
        <img src={ ProfileIcon } alt="Profile Icon" />
      </button>
      <h1 data-testid="page-title">{ title }</h1>
      {withSearch
        && searchBtn()}
      {showSerch
        && searchInput()}
    </header>
  );

  return (
    <>
      { redirect && <Redirect to="/perfil" />}
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
