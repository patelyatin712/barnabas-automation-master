import React from 'react';

import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const MainTemplate = ({ children }) => (
  <>
    <Navbar />
    <div className='container'>
      {children}
    </div>
    <Footer />
  </>
);

export default MainTemplate