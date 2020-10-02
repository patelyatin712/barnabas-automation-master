import React from 'react';
import './Card.scss';

const Card = ({ imageURL, cardContent }) => (
  <div className="card" style={{ width: '18rem' }}>
    <img src={imageURL} className="card-img-top" alt={imageURL} />
    <div className="card-body">
      <p className="card-text">
        {cardContent}
      </p>
    </div>
  </div>
);

export default Card