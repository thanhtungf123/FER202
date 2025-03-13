import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button, ListGroup } from 'react-bootstrap';
import './AnimalCard.css';

const AnimalCard = ({ name, scientificName, size, diet, additional, image }) => {
  const showAdditionalData = () => {
    if (!additional || Object.keys(additional).length === 0) {
      alert('No additional information available.');
      return;
    }

    const formattedData = Object.entries(additional)
      .map(([key, value]) => `${key}: ${value}`)
      .join('\n');

    alert(formattedData);
  };

  return (
    <Card className="card">
      <Card.Img variant="top" src={image} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle>{scientificName}</Card.Subtitle>
        <Card.Text>{size} kg</Card.Text>
        <ListGroup variant="flush">
          <ListGroup.Item>{diet.join(', ')}.</ListGroup.Item>
        </ListGroup>
        <Button onClick={showAdditionalData} className="mt-2">
          More Info
        </Button>
      </Card.Body>
    </Card>
  );
};

AnimalCard.propTypes = {
  name: PropTypes.string.isRequired,
  scientificName: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  diet: PropTypes.arrayOf(PropTypes.string).isRequired,
  additional: PropTypes.shape({
    link: PropTypes.string,
    notes: PropTypes.string,
  }),
  image: PropTypes.string.isRequired,
};

AnimalCard.defaultProps = {
  additional: {
    notes: 'No Additional Information',
  },
};

export default AnimalCard;
