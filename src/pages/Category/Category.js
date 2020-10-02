import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom'

import axios from '../../components/Axios/Axios'
import Template from '../../template/Template'
import Card from '../../components/Card/Card'

import showsCategoryResponse from '../../apiResponse/ShowsCategory'

import './Category.scss';

const Category = ({ match }) => {
  const [category, setCategory] = useState(null);

  useEffect(() => {
    axios.get(`/shows/category/${match.params.categoryId}`).then(episodeRes => {
      console.log('[episodeRes]', episodeRes);
    })
    setCategory(showsCategoryResponse);
  }, [match])

  return (
    <Template>
      <div className="category">
        {category && category.map(c => (
          <Card imageURL={c.banner_url} cardContent={c.name} />
        ))}
      </div>
    </Template>
  );
};

export default withRouter(Category)