import React from 'react';
import PropTypes from 'prop-types';
import ProfileIcon from '../images/profileIcon.svg';
import SearchIcon from '../images/searchIcon.svg';

export default function Header({ name }) {
  return (
    <header>
      <button type="button" data-testid="profile-top-btn">
        <img src={ ProfileIcon } alt="Profile Icon" />
      </button>
      <h1 data-testid="page-title">{ name }</h1>
      <button type="button" data-testid="search-top-btn">
        <img src={ SearchIcon } alt="search Icon" />
      </button>
    </header>
  );
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
};
