import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import ProfileIcon from '../images/profileIcon.svg';
import SearchIcon from '../images/searchIcon.svg';

export default function Header({ title, withSearch = true }) {
  const [redirect, setRedirect] = useState(false);
  const searchBtn = () => (
    <button type="button" data-testid="search-top-btn">
      <img src={ SearchIcon } alt="search Icon" />
    </button>
  );
  const handleProfileRote = () => {
    setRedirect(true);
  };
  const header = () => (
    <header>
      <button type="button" data-testid="profile-top-btn" onClick={ handleProfileRote }>
        <img src={ ProfileIcon } alt="Profile Icon" />
      </button>
      <h1 data-testid="page-title">{ title }</h1>
      {withSearch
        && searchBtn()}
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
