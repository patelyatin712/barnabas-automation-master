import React from 'react';
import { Link } from 'react-router-dom'

import CategoryItem from '../CategoryItem/CategoryItem'

import './CategoryList.scss';

const CategoryList = ({ categories }) => {

  return (
    <div className="category-list">
      {categories && categories.map((category, index) => !category.parent_id && index < 6 && (
        <Link to={`shows/category/${category.id}`}>
          <CategoryItem title={category.name} />
        </Link>
      ))
      }
    </div>
  );
}

export default CategoryList