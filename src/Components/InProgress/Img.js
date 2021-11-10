import React from 'react';
import PropTypes from 'prop-types';
import shareIcon from '../../images/shareIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';

export default function Img({ src, title, category }) {
  return (
    <>
      <img data-testid="recipe-photo" src={ src } alt={ title } />
      <div>
        <h1 data-testid="recipe-title">{ title }</h1>
        <h2 data-testid="recipe-category">{ category }</h2>
      </div>
      <div>
        <button data-testid="share-btn" type="button">
          <img src={ shareIcon } alt="Share BTN" />
        </button>
        <button data-testid="favorite-btn" type="button">
          <img src={ whiteHeartIcon } alt="White Heart BTN" />
        </button>
      </div>
    </>
  );
}

Img.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
