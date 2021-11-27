import React from 'react';
import PropTypes from 'prop-types';
import ButtonFavorite from '../ButtonFavorite';
import ButtonShare from '../ButtonShare';

export default function Img({ src, title, category, type, id, recipe, link }) {
  return (
    <>
      <img width="360px" data-testid="recipe-photo" src={ src } alt={ title } />
      <div>
        <h1 data-testid="recipe-title">{ title }</h1>
        <h2 data-testid="recipe-category">{ category }</h2>
      </div>
      <div>
        <ButtonShare link={ link } />
        <ButtonFavorite type={ type } id={ id } recipe={ recipe } />
      </div>
    </>
  );
}

Img.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  recipe: PropTypes.objectOf(PropTypes.any).isRequired,
  link: PropTypes.string.isRequired,
};

Img.defaultProps = {
  src: null,
  title: null,
  category: null,
};
