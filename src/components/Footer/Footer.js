import React from 'react';

import './Footer.scss';

const Footer = (props) => (
  <footer className="footer">
    <div className="container d-flex justify-content-between align-items-center">
      <p>
        &#169; 2020 SOH FM All Rights Reserved
      </p>
      <div className="social-media-links">
        <a href='https://www.facebook.com' target="_blank">
          <i class="fab fa-facebook-square"></i>
        </a>
        <a href='https://www.linkedin.com/' target="_blank">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href='https://twitter.com/' target="_blank">
          <i class="fab fa-twitter-square"></i>
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
