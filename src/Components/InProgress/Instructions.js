import React from 'react';
import PropTypes from 'prop-types';

export default function Instructions({ instruction }) {
  return (
    <div>
      <h1>Instruções</h1>
      <div>
        <p data-testid="instructions">{ instruction }</p>
      </div>
    </div>
  );
}

Instructions.propTypes = {
  instruction: PropTypes.string,
};

Instructions.defaultProps = {
  instruction: null,
};
