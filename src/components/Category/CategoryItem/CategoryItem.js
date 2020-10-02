import React from 'react';
import './CategoryItem.scss';

const CategoryItem = ({ title }) => (
  <div className="category-item">
    <img src={require('../../../assets/images/CategoryIcon.png')} />
    <h4>{title}</h4>
  </div>
);

export default CategoryItem