import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ButtonShare from './ButtonShare';
import tagImg from '../images/tag.png';

export default function MadeMealCard({ meal, index }) {
  return (
    <Card style={ { width: '9rem' } }>
      <Link to={ `comidas/${meal.id}` }>
        <Card.Img
          variant="top"
          data-testid={ `${index}-horizontal-image` }
          alt={ meal.name }
          src={ meal.image }
        />
      </Link>
      <ButtonShare link={ `http://localhost:3000/comidas/${meal.id}` } testId={ `${index}-horizontal-share-btn` } />
      <Card.Body>
        <Card.Title data-testid={ `${index}-horizontal-name` }>
          {meal.name}
        </Card.Title>
        <Card.Text>
          <p data-testid={ `${index}-horizontal-top-text` }>
            { `${meal.area} - ${meal.category}`}
          </p>
          <img src={ tagImg } alt="Tag" className="icone-tag" />
          {meal.tags.map((tagName) => (
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
          {meal.doneDate}
        </span>
      </Card.Footer>
    </Card>
  );
}

MadeMealCard.propTypes = {
  meal: PropTypes.objectOf(PropTypes.any).isRequired,
  index: PropTypes.number.isRequired,
};
