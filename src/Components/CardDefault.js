import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

function CardDefault(props) {
  const { img, name, index, category, area } = props;

  return (
    <Card style={ { width: '9rem' } } data-testid={ `${index}-recipe-card` }>
      <Card.Img variant="top" src={ img } data-testid={ `${index}-card-img` } />
      <Card.Body>
        <Card.Title
          data-testid={ `${index}-card-name` }
          className="card-title"
        >
          { name }
        </Card.Title>
        { category && (
          <Card.Text>
            <p>{ `Categoria: ${category}` }</p>
            { area && (
              <p>{ `Região: ${area}` }</p>
            )}
          </Card.Text>
        )}
      </Card.Body>
      {/* <ListGroup className="list-group-flush">
        <ListGroupItem>{ `Categoria: ${category}` }</ListGroupItem>
        <ListGroupItem>{ `Região: ${area}` }</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Link href={ `/comidas/${id}` }>Mais detalhes</Card.Link>
      </Card.Body> */}
    </Card>
  );
}

CardDefault.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired,
};

export default CardDefault;
