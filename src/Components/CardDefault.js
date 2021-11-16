import React from 'react';
import PropTypes from 'prop-types';

function CardDefault(props) {
  const { img, name, index } = props;
  return (
    <div data-testid={ `${index}-recipe-card` } style={ { width: '250px' } }>
      <img src={ img } alt={ name } data-testid={ `${index}-card-img` } width="100" />
      <p
        data-testid={ `${index}-card-name` }
      >
        { name }
      </p>
    </div>
  );
}

CardDefault.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default CardDefault;
