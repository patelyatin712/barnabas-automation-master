import React from 'react';
import { Link } from 'react-router-dom'
import './Navbar.scss';

const Navbar = props => {

  return (
    <nav className="navbar navbar-expand-lg site-header">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img className="logo-container" src={require('../../assets/images/Logo.png')} alt="BayVoice" />
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/programs">Programs</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact Us</Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Login</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar