import React from 'react';
import PropTypes from 'prop-types';

function CardRecommendation(props) {
  const { img, name, index, display } = props;
  return (
    <div style={ { width: '200px', display } }>
      <img src={ img } alt={ name } width="100" />
      <p
        data-testid={ `${index}-recomendation-title` }
      >
        { name }
      </p>
    </div>
  );
}

CardRecommendation.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  display: PropTypes.string.isRequired,
};

export default CardRecommendation;
