import React from 'react';

import CategoryList from './CategoryList/CategoryList'

import './Category.scss';

const Category = ({ categories }) => (
  <div>
    <h3>Categories</h3>
    <CategoryList categories={categories} />
  </div>
);

export default Category