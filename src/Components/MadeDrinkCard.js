import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import ButtonShare from './ButtonShare';

export default function MadeDrinkCard({ drink, index }) {
  return (
    <Card style={ { width: '9rem' } }>
      <Link to={ `bebidas/${drink.id}` }>
        <Card.Img
          data-testid={ `${index}-horizontal-image` }
          alt={ drink.name }
          src={ drink.image }
        />
      </Link>
      <Card.Body>
        <Card.Title data-testid={ `${index}-horizontal-name` }>
          {drink.name}
          <ButtonShare link={ `http://localhost:3000/bebidas/${drink.id}` } testId={ `${index}-horizontal-share-btn` } />
        </Card.Title>
        <Card.Text>
          <p data-testid={ `${index}-horizontal-top-text` }>
            { `${drink.area} - ${drink.category}`}
          </p>
          <span
            data-testid={ `${index}-horizontal-top-text` }
          >
            {drink.alcoholicOrNot}
          </span>
          {drink.tags.map((tagName) => (
            <span
              data-testid={ `${index}-${tagName}-horizontal-tag` }
              key={ tagName }
            >
              {tagName}
            </span>
          ))}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <span
          data-testid={ `${index}-horizontal-done-date` }
        >
          {drink.doneDate}
        </span>
      </Card.Footer>
    </Card>
  );
}

MadeDrinkCard.propTypes = {
  drink: PropTypes.objectOf(PropTypes.any).isRequired,
  index: PropTypes.number.isRequired,
};
