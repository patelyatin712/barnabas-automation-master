import React, { useEffect, useState } from 'react';

import axios from '../../components/Axios/Axios'
import Template from '../../template/Template'
import Episodes from '../../components/Episodes/Episodes'
import Category from '../../components/Category/Category'

import episodeSearchResponse from '../../apiResponse/EpisodeSearch'
import categoryAllResponse from '../../apiResponse/CategoryAll'

import './Home.scss';

const Home = props => {
  const [episodes, setEpisodes] = useState(null);
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    axios.get('/episodes/search').then(episodeRes => {
      console.log('[episodeRes]', episodeRes);
    })
    axios.post('/categories/all', null).then(categoryRes => {
      console.log('[categoryRes]', categoryRes);
    })
    setEpisodes(episodeSearchResponse);
    setCategories(categoryAllResponse);
  }, [])

  return (
    <Template>
      <div className="episode-container">
        <Episodes episodes={episodes} />
      </div>
      <div className="categories-container">
        <Category categories={categories} />
      </div>
    </Template>
  );
}

export default Home