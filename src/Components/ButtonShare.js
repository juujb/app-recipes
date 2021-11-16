import React, { useState } from 'react';
import PropTypes from 'prop-types';
import shareSVG from '../images/shareIcon.svg';

export default function ButtonShare({ link }) {
  const [alert, setAlert] = useState('');

  function handleClick(url) {
    navigator.clipboard.writeText(url);
    setAlert('Link copiado!');
  }
  return (
    <>
      <span>{ alert }</span>
      <button
        type="button"
        data-testid="share-btn"
        onClick={ () => handleClick(link) }
      >
        <img src={ shareSVG } alt="botão de Compartilhar" />
      </button>
    </>
  );
}

ButtonShare.propTypes = {
  link: PropTypes.string.isRequired,
};
