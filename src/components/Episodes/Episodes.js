import React from 'react';

import Carousel from 'react-bootstrap/Carousel'

import './Episodes.scss';

const Episode = ({ episodes }) => (
  <div className="episodes-container">
    {episodes && episodes.length > 0 && (
      <Carousel>
        {episodes.map(episode => (
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-slide"
              src={episode && episode.banner_url}
              alt={episode && episode.banner_url}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    )}
  </div>
);

export default Episode